/**
 * Data Compression & Encoding Engine
 * Implementations of:
 * 1. Lempel-Ziv-Welch (LZW) Dictionary Compression & Decompression
 * 2. Run-Length Encoding (RLE)
 * 3. Compression Ratio & Entropy Analytics
 */

export type LZWDictionaryEntry = {
  step: number;
  char: string;
  w: string;
  combined: string;
  emittedCode: number;
  newEntry?: string;
  newCode?: number;
};

export type LZWCompressResult = {
  codes: number[];
  history: LZWDictionaryEntry[];
  originalBytes: number;
  compressedBits: number;
  dictionarySize: number;
};

/**
 * LZW Compress with step-by-step trace
 */
export function lzwCompress(input: string): LZWCompressResult {
  if (!input) {
    return { codes: [], history: [], originalBytes: 0, compressedBits: 0, dictionarySize: 256 };
  }

  // Initialize dictionary with ASCII characters (0 - 255)
  const dict = new Map<string, number>();
  for (let i = 0; i < 256; i++) {
    dict.set(String.fromCharCode(i), i);
  }

  let nextCode = 256;
  let w = "";
  const codes: number[] = [];
  const history: LZWDictionaryEntry[] = [];
  let step = 1;

  for (let i = 0; i < input.length; i++) {
    const c = input[i];
    const wc = w + c;

    if (dict.has(wc)) {
      w = wc;
    } else {
      const code = dict.get(w)!;
      codes.push(code);

      // Add wc to dictionary
      dict.set(wc, nextCode);

      history.push({
        step: step++,
        char: c,
        w,
        combined: wc,
        emittedCode: code,
        newEntry: wc,
        newCode: nextCode,
      });

      nextCode++;
      w = c;
    }
  }

  if (w !== "") {
    const code = dict.get(w)!;
    codes.push(code);
    history.push({
      step: step++,
      char: "EOF",
      w,
      combined: w,
      emittedCode: code,
    });
  }

  // Calculate bit-length (each code needs ceil(log2(nextCode)) bits, typically 9 to 12 bits)
  const bitsPerCode = Math.max(9, Math.ceil(Math.log2(nextCode)));
  const compressedBits = codes.length * bitsPerCode;

  return {
    codes,
    history,
    originalBytes: input.length,
    compressedBits,
    dictionarySize: nextCode,
  };
}

/**
 * LZW Decompress: reconstructs original text from codes without sending the dictionary!
 */
export function lzwDecompress(codes: number[]): string {
  if (!codes || codes.length === 0) return "";

  const dict = new Map<number, string>();
  for (let i = 0; i < 256; i++) {
    dict.set(i, String.fromCharCode(i));
  }

  let nextCode = 256;
  let oldCode = codes[0];
  let s = dict.get(oldCode) || "";
  let c = s[0];
  let output = s;

  for (let i = 1; i < codes.length; i++) {
    const newCode = codes[i];
    let entry = "";

    if (dict.has(newCode)) {
      entry = dict.get(newCode)!;
    } else if (newCode === nextCode) {
      // Special edge case: cScSc pattern
      entry = s + c;
    } else {
      throw new Error(`Corrupted LZW code: ${newCode}`);
    }

    output += entry;
    c = entry[0];
    dict.set(nextCode++, s + c);
    s = entry;
  }

  return output;
}

// ============================================================================
// 2. RUN-LENGTH ENCODING (RLE)
// ============================================================================

export type RLEToken = {
  count: number;
  char: string;
};

export function rleCompress(input: string): { encoded: string; tokens: RLEToken[] } {
  if (!input) return { encoded: "", tokens: [] };

  const tokens: RLEToken[] = [];
  let count = 1;
  let curr = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i] === curr) {
      count++;
    } else {
      tokens.push({ count, char: curr });
      curr = input[i];
      count = 1;
    }
  }
  tokens.push({ count, char: curr });

  const encoded = tokens.map((t) => `${t.count}${t.char}`).join("");
  return { encoded, tokens };
}

export function rleDecompress(encoded: string): string {
  let output = "";
  const regex = /(\d+)(.)/g;
  let match;
  while ((match = regex.exec(encoded)) !== null) {
    const count = parseInt(match[1], 10);
    const char = match[2];
    output += char.repeat(count);
  }
  return output;
}

// ============================================================================
// 3. STATISTICAL COMPRESSION RATIO
// ============================================================================

export function calculateCompressionRatio(
  originalBytes: number,
  compressedBytes: number
): { ratioPercent: number; spaceSavingsPercent: number } {
  if (originalBytes === 0) return { ratioPercent: 100, spaceSavingsPercent: 0 };
  const ratioPercent = Math.round((compressedBytes / originalBytes) * 1000) / 10;
  const spaceSavingsPercent = Math.round((1 - compressedBytes / originalBytes) * 1000) / 10;
  return { ratioPercent, spaceSavingsPercent };
}

