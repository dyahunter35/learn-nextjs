/**
 * Cryptographic Engine & Mathematical Utilities
 * Comprehensive implementations of classical ciphers, cryptanalysis, and Enigma simulation.
 */

export const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/** Safe positive modulo: ((n % m) + m) % m */
export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

/** Greatest Common Divisor */
export function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

/** Modular Multiplicative Inverse of a modulo m */
export function modInverse(a: number, m: number = 26): number | null {
  a = mod(a, m);
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) return x;
  }
  return null;
}

/** Check if character is an English letter */
export function isLetter(c: string): boolean {
  return /^[a-zA-Z]$/.test(c);
}

// ==========================================
// 1. CAESAR CIPHER
// ==========================================
export function caesarEncrypt(text: string, shift: number): string {
  const k = mod(shift, 26);
  return text
    .split("")
    .map((char) => {
      const upper = char.toUpperCase();
      const code = upper.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        const shifted = ((code - 65 + k) % 26) + 65;
        const res = String.fromCharCode(shifted);
        return char === upper ? res : res.toLowerCase();
      }
      return char;
    })
    .join("");
}

export function caesarDecrypt(text: string, shift: number): string {
  return caesarEncrypt(text, -shift);
}

// ==========================================
// 2. MONOALPHABETIC SUBSTITUTION CIPHER
// ==========================================
export function generateRandomSubstitutionKey(): string {
  const letters = ALPHABET.split("");
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters.join("");
}

export function substitutionEncrypt(text: string, key: string): string {
  const cleanKey = key.toUpperCase();
  return text
    .split("")
    .map((char) => {
      const upper = char.toUpperCase();
      const idx = ALPHABET.indexOf(upper);
      if (idx !== -1 && cleanKey[idx]) {
        const mapped = cleanKey[idx];
        return char === upper ? mapped : mapped.toLowerCase();
      }
      return char;
    })
    .join("");
}

export function substitutionDecrypt(text: string, key: string): string {
  const cleanKey = key.toUpperCase();
  return text
    .split("")
    .map((char) => {
      const upper = char.toUpperCase();
      const idx = cleanKey.indexOf(upper);
      if (idx !== -1) {
        const mapped = ALPHABET[idx];
        return char === upper ? mapped : mapped.toLowerCase();
      }
      return char;
    })
    .join("");
}

// ==========================================
// 3. AFFINE CIPHER (y = (ax + b) mod 26)
// ==========================================
export const VALID_AFFINE_A = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];

export function affineEncrypt(text: string, a: number, b: number): { result: string; valid: boolean; error?: string } {
  if (gcd(a, 26) !== 1) {
    return { result: "", valid: false, error: `المعامل a=${a} غير أولي نسبياً مع 26 (gcd=${gcd(a, 26)}). اختر a من: [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25]` };
  }
  const result = text
    .split("")
    .map((char) => {
      const upper = char.toUpperCase();
      const code = upper.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        const x = code - 65;
        const y = mod(a * x + b, 26);
        const res = String.fromCharCode(y + 65);
        return char === upper ? res : res.toLowerCase();
      }
      return char;
    })
    .join("");
  return { result, valid: true };
}

export function affineDecrypt(text: string, a: number, b: number): { result: string; valid: boolean; error?: string } {
  const invA = modInverse(a, 26);
  if (invA === null) {
    return { result: "", valid: false, error: `لا يوجد معكوس ضربي للمعامل a=${a} موديلو 26` };
  }
  const result = text
    .split("")
    .map((char) => {
      const upper = char.toUpperCase();
      const code = upper.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        const y = code - 65;
        const x = mod(invA * (y - b), 26);
        const res = String.fromCharCode(x + 65);
        return char === upper ? res : res.toLowerCase();
      }
      return char;
    })
    .join("");
  return { result, valid: true };
}

// ==========================================
// 4. PLAYFAIR CIPHER (5x5 Key Matrix)
// ==========================================
export function buildPlayfairMatrix(keyword: string): string[][] {
  const clean = (keyword.toUpperCase().replace(/[^A-Z]/g, "").replace(/J/g, "I") + ALPHABET.replace("J", ""))
    .split("");
  const seen = new Set<string>();
  const matrixLetters: string[] = [];
  for (const ch of clean) {
    if (!seen.has(ch)) {
      seen.add(ch);
      matrixLetters.push(ch);
      if (matrixLetters.length === 25) break;
    }
  }
  const matrix: string[][] = [];
  for (let r = 0; r < 5; r++) {
    matrix.push(matrixLetters.slice(r * 5, (r + 1) * 5));
  }
  return matrix;
}

export function preparePlayfairText(text: string): { digrams: [string, string][]; paddedText: string } {
  const clean = text.toUpperCase().replace(/[^A-Z]/g, "").replace(/J/g, "I");
  const digrams: [string, string][] = [];
  let i = 0;
  while (i < clean.length) {
    const a = clean[i];
    if (i + 1 >= clean.length) {
      digrams.push([a, "X"]);
      i += 1;
    } else {
      const b = clean[i + 1];
      if (a === b) {
        digrams.push([a, "X"]);
        i += 1;
      } else {
        digrams.push([a, b]);
        i += 2;
      }
    }
  }
  const paddedText = digrams.map(([a, b]) => a + b).join(" ");
  return { digrams, paddedText };
}

export function findMatrixPos(matrix: string[][], char: string): [number, number] {
  const target = char === "J" ? "I" : char;
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      if (matrix[r][c] === target) return [r, c];
    }
  }
  return [0, 0];
}

export type PlayfairStep = {
  pair: [string, string];
  posA: [number, number];
  posB: [number, number];
  rule: "same_row" | "same_col" | "rectangle";
  cipherPair: [string, string];
};

export function playfairProcess(
  matrix: string[][],
  digrams: [string, string][],
  decrypt: boolean = false
): { steps: PlayfairStep[]; output: string } {
  const shift = decrypt ? 4 : 1; // -1 mod 5 is +4 mod 5
  const steps: PlayfairStep[] = [];

  for (const [a, b] of digrams) {
    const [r1, c1] = findMatrixPos(matrix, a);
    const [r2, c2] = findMatrixPos(matrix, b);

    let rule: "same_row" | "same_col" | "rectangle";
    let ca: string;
    let cb: string;

    if (r1 === r2) {
      rule = "same_row";
      ca = matrix[r1][(c1 + shift) % 5];
      cb = matrix[r2][(c2 + shift) % 5];
    } else if (c1 === c2) {
      rule = "same_col";
      ca = matrix[(r1 + shift) % 5][c1];
      cb = matrix[(r2 + shift) % 5][c2];
    } else {
      rule = "rectangle";
      ca = matrix[r1][c2];
      cb = matrix[r2][c1];
    }

    steps.push({
      pair: [a, b],
      posA: [r1, c1],
      posB: [r2, c2],
      rule,
      cipherPair: [ca, cb],
    });
  }

  const output = steps.map((s) => s.cipherPair.join("")).join("");
  return { steps, output };
}

// ==========================================
// 5. HILL CIPHER (2x2 and 3x3 Matrix)
// ==========================================
export type Matrix2x2 = [[number, number], [number, number]];
export type Matrix3x3 = [[number, number, number], [number, number, number], [number, number, number]];

export function det2x2(m: Matrix2x2): number {
  return mod(m[0][0] * m[1][1] - m[0][1] * m[1][0], 26);
}

export function invertMatrix2x2(m: Matrix2x2): Matrix2x2 | null {
  const det = det2x2(m);
  const invDet = modInverse(det, 26);
  if (invDet === null) return null;
  // adjugate: [[d, -b], [-c, a]]
  return [
    [mod(invDet * m[1][1], 26), mod(invDet * -m[0][1], 26)],
    [mod(invDet * -m[1][0], 26), mod(invDet * m[0][0], 26)],
  ];
}

export function det3x3(m: Matrix3x3): number {
  const d =
    m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) -
    m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) +
    m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
  return mod(d, 26);
}

export function invertMatrix3x3(m: Matrix3x3): Matrix3x3 | null {
  const det = det3x3(m);
  const invDet = modInverse(det, 26);
  if (invDet === null) return null;

  // Cofactor matrix transposed
  const adj: Matrix3x3 = [
    [
      mod(m[1][1] * m[2][2] - m[1][2] * m[2][1], 26),
      mod(-(m[0][1] * m[2][2] - m[0][2] * m[2][1]), 26),
      mod(m[0][1] * m[1][2] - m[0][2] * m[1][1], 26),
    ],
    [
      mod(-(m[1][0] * m[2][2] - m[1][2] * m[2][0]), 26),
      mod(m[0][0] * m[2][2] - m[0][2] * m[2][0], 26),
      mod(-(m[0][0] * m[1][2] - m[0][2] * m[1][0]), 26),
    ],
    [
      mod(m[1][0] * m[2][1] - m[1][1] * m[2][0], 26),
      mod(-(m[0][0] * m[2][1] - m[0][1] * m[2][0]), 26),
      mod(m[0][0] * m[1][1] - m[0][1] * m[1][0], 26),
    ],
  ];

  return [
    [mod(invDet * adj[0][0], 26), mod(invDet * adj[0][1], 26), mod(invDet * adj[0][2], 26)],
    [mod(invDet * adj[1][0], 26), mod(invDet * adj[1][1], 26), mod(invDet * adj[1][2], 26)],
    [mod(invDet * adj[2][0], 26), mod(invDet * adj[2][1], 26), mod(invDet * adj[2][2], 26)],
  ];
}

export function hillProcess2x2(text: string, matrix: Matrix2x2, decrypt = false): {
  output: string;
  steps: { vector: [number, number]; letters: string; resultVector: [number, number]; resultLetters: string }[];
  valid: boolean;
  error?: string;
} {
  const effectiveMatrix = decrypt ? invertMatrix2x2(matrix) : matrix;
  if (!effectiveMatrix) {
    return { output: "", steps: [], valid: false, error: `محدد المصفوفة (det=${det2x2(matrix)}) غير قابل للقلب بموديلو 26` };
  }

  const clean = text.toUpperCase().replace(/[^A-Z]/g, "");
  const padded = clean.length % 2 === 0 ? clean : clean + "X";
  const steps: { vector: [number, number]; letters: string; resultVector: [number, number]; resultLetters: string }[] = [];
  let output = "";

  for (let i = 0; i < padded.length; i += 2) {
    const v: [number, number] = [padded.charCodeAt(i) - 65, padded.charCodeAt(i + 1) - 65];
    const r1 = mod(effectiveMatrix[0][0] * v[0] + effectiveMatrix[0][1] * v[1], 26);
    const r2 = mod(effectiveMatrix[1][0] * v[0] + effectiveMatrix[1][1] * v[1], 26);
    const resLet = String.fromCharCode(r1 + 65, r2 + 65);
    output += resLet;
    steps.push({
      vector: v,
      letters: padded.slice(i, i + 2),
      resultVector: [r1, r2],
      resultLetters: resLet,
    });
  }

  return { output, steps, valid: true };
}

// ==========================================
// 6. VIGENÈRE CIPHER
// ==========================================
export function vigenereEncrypt(text: string, key: string): {
  output: string;
  steps: { plain: string; keyChar: string; pVal: number; kVal: number; cVal: number; cipher: string }[];
} {
  const cleanKey = key.toUpperCase().replace(/[^A-Z]/g, "") || "KEY";
  let keyIdx = 0;
  const steps: { plain: string; keyChar: string; pVal: number; kVal: number; cVal: number; cipher: string }[] = [];

  const output = text
    .split("")
    .map((char) => {
      const upper = char.toUpperCase();
      const code = upper.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        const pVal = code - 65;
        const keyChar = cleanKey[keyIdx % cleanKey.length];
        const kVal = keyChar.charCodeAt(0) - 65;
        const cVal = (pVal + kVal) % 26;
        keyIdx++;
        const cipherChar = String.fromCharCode(cVal + 65);
        steps.push({ plain: upper, keyChar, pVal, kVal, cVal, cipher: cipherChar });
        return char === upper ? cipherChar : cipherChar.toLowerCase();
      }
      return char;
    })
    .join("");

  return { output, steps };
}

export function vigenereDecrypt(text: string, key: string): {
  output: string;
  steps: { cipher: string; keyChar: string; cVal: number; kVal: number; pVal: number; plain: string }[];
} {
  const cleanKey = key.toUpperCase().replace(/[^A-Z]/g, "") || "KEY";
  let keyIdx = 0;
  const steps: { cipher: string; keyChar: string; cVal: number; kVal: number; pVal: number; plain: string }[] = [];

  const output = text
    .split("")
    .map((char) => {
      const upper = char.toUpperCase();
      const code = upper.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        const cVal = code - 65;
        const keyChar = cleanKey[keyIdx % cleanKey.length];
        const kVal = keyChar.charCodeAt(0) - 65;
        const pVal = mod(cVal - kVal, 26);
        keyIdx++;
        const plainChar = String.fromCharCode(pVal + 65);
        steps.push({ cipher: upper, keyChar, cVal, kVal, pVal, plain: plainChar });
        return char === upper ? plainChar : plainChar.toLowerCase();
      }
      return char;
    })
    .join("");

  return { output, steps };
}

// ==========================================
// 7. ROW TRANSPOSITION CIPHER
// ==========================================
export function rowTranspositionEncrypt(text: string, key: string): {
  output: string;
  grid: string[][];
  colOrder: number[];
  numCols: number;
  numRows: number;
} {
  const cleanText = text.toUpperCase().replace(/[^A-Z0-9]/g, "");
  const cleanKey = key.toUpperCase().replace(/[^A-Z0-9]/g, "") || "4132";
  const numCols = cleanKey.length;

  // Derive column order by sorting key characters with original indices
  const orderWithIndex = cleanKey
    .split("")
    .map((char, index) => ({ char, index }))
    .sort((a, b) => a.char.localeCompare(b.char));

  // colOrder maps 0..numCols-1 in reading order
  const colOrder = orderWithIndex.map((item) => item.index);

  const numRows = Math.ceil(cleanText.length / numCols) || 1;
  const grid: string[][] = [];
  let ptr = 0;
  for (let r = 0; r < numRows; r++) {
    const row: string[] = [];
    for (let c = 0; c < numCols; c++) {
      if (ptr < cleanText.length) {
        row.push(cleanText[ptr++]);
      } else {
        row.push("X"); // padding
      }
    }
    grid.push(row);
  }

  // Read out column by column in colOrder
  let output = "";
  for (const c of colOrder) {
    for (let r = 0; r < numRows; r++) {
      output += grid[r][c];
    }
  }

  return { output, grid, colOrder, numCols, numRows };
}

export function rowTranspositionDecrypt(ciphertext: string, key: string): {
  output: string;
  grid: string[][];
  numCols: number;
  numRows: number;
} {
  const cleanCipher = ciphertext.toUpperCase().replace(/[^A-Z0-9]/g, "");
  const cleanKey = key.toUpperCase().replace(/[^A-Z0-9]/g, "") || "4132";
  const numCols = cleanKey.length;
  const numRows = Math.ceil(cleanCipher.length / numCols) || 1;

  const orderWithIndex = cleanKey
    .split("")
    .map((char, index) => ({ char, index }))
    .sort((a, b) => a.char.localeCompare(b.char));
  const colOrder = orderWithIndex.map((item) => item.index);

  // Initialize empty grid
  const grid: string[][] = Array.from({ length: numRows }, () => Array(numCols).fill(""));

  let ptr = 0;
  for (const c of colOrder) {
    for (let r = 0; r < numRows; r++) {
      if (ptr < cleanCipher.length) {
        grid[r][c] = cleanCipher[ptr++];
      }
    }
  }

  let output = "";
  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      output += grid[r][c] || "";
    }
  }

  return { output, grid, numCols, numRows };
}

// ==========================================
// 8. PRODUCT CIPHERS (Substitution + Permutation)
// ==========================================
export function productCipherPipeline(
  text: string,
  subShift: number,
  transKey: string
): {
  input: string;
  substituted: string;
  transposed: string;
} {
  const input = text.toUpperCase().replace(/[^A-Z]/g, "");
  // Stage 1: Substitution (Caesar shift)
  const substituted = caesarEncrypt(input, subShift);
  // Stage 2: Permutation (Row transposition)
  const transposed = rowTranspositionEncrypt(substituted, transKey).output;

  return {
    input,
    substituted,
    transposed,
  };
}

// ==========================================
// 9. ONE-TIME PAD / VERNAM CIPHER
// ==========================================
export function generateOtpKey(length: number): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let key = "";
  for (let i = 0; i < length; i++) {
    key += chars[Math.floor(Math.random() * chars.length)];
  }
  return key;
}

export function otpProcess(
  text: string,
  key: string
): {
  output: string;
  steps: {
    char: string;
    keyChar: string;
    charBin: string;
    keyBin: string;
    xorBin: string;
    resultChar: string;
  }[];
} {
  const steps: {
    char: string;
    keyChar: string;
    charBin: string;
    keyBin: string;
    xorBin: string;
    resultChar: string;
  }[] = [];

  let output = "";
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const k = key[i % key.length] || "A";
    const cCode = c.charCodeAt(0);
    const kCode = k.charCodeAt(0);
    const xorCode = cCode ^ kCode;

    const charBin = cCode.toString(2).padStart(8, "0");
    const keyBin = kCode.toString(2).padStart(8, "0");
    const xorBin = xorCode.toString(2).padStart(8, "0");

    // Raw character for exact cryptographic XOR roundtrip
    output += String.fromCharCode(xorCode);

    // For human display in UI table
    const displayChar = xorCode >= 32 && xorCode <= 126 ? String.fromCharCode(xorCode) : `\\x${xorCode.toString(16).padStart(2, "0")}`;

    steps.push({
      char: c,
      keyChar: k,
      charBin,
      keyBin,
      xorBin,
      resultChar: displayChar,
    });
  }

  return { output, steps };
}

// ==========================================
// 10. ROTOR CIPHER MACHINES / ENIGMA
// ==========================================
export interface EnigmaRotorConfig {
  wiring: string;
  notch: string;
}

export const ENIGMA_ROTORS: Record<string, EnigmaRotorConfig> = {
  I: { wiring: "EKMFLGDQVZNTOWYHXUSPAIBRCJ", notch: "Q" },
  II: { wiring: "AJDKSIRUXBLHWTMCQGZNPYFVOE", notch: "E" },
  III: { wiring: "BDFHJLCPRTXVZNYEIWGAKMUSQO", notch: "V" },
  IV: { wiring: "ESOVPZJAYQUIRHXLNFTGKDCMWB", notch: "J" },
  V: { wiring: "VZBRGITYUPSDNHLXAWMJQOFECK", notch: "Z" },
};

export const ENIGMA_REFLECTORS: Record<string, string> = {
  B: "YRUHQSLDPXNGOKMIEBFZCWVJAT",
  C: "FVPJIAOYEDRZXWGCTKUQSBNMHL",
};

export class EnigmaMachine {
  rotorOrder: [string, string, string]; // e.g. ["I", "II", "III"] (Left, Middle, Right)
  positions: [number, number, number]; // 0..25 (A..Z)
  rings: [number, number, number]; // Ringstellung 0..25
  reflector: string;
  plugboard: Map<string, string>;

  constructor(
    rotorOrder: [string, string, string] = ["I", "II", "III"],
    positions: [string, string, string] = ["A", "A", "A"],
    rings: [number, number, number] = [0, 0, 0],
    reflectorKey: string = "B",
    plugs: [string, string][] = []
  ) {
    this.rotorOrder = rotorOrder;
    this.positions = [
      positions[0].charCodeAt(0) - 65,
      positions[1].charCodeAt(0) - 65,
      positions[2].charCodeAt(0) - 65,
    ];
    this.rings = rings;
    this.reflector = ENIGMA_REFLECTORS[reflectorKey] || ENIGMA_REFLECTORS.B;
    this.plugboard = new Map();
    for (const [a, b] of plugs) {
      this.plugboard.set(a.toUpperCase(), b.toUpperCase());
      this.plugboard.set(b.toUpperCase(), a.toUpperCase());
    }
  }

  step(): void {
    const [rL, rM, rR] = this.rotorOrder;
    const notchR = ENIGMA_ROTORS[rR].notch.charCodeAt(0) - 65;
    const notchM = ENIGMA_ROTORS[rM].notch.charCodeAt(0) - 65;

    const rAtNotch = this.positions[2] === notchR;
    const mAtNotch = this.positions[1] === notchM;

    // Double-stepping anomaly of Enigma:
    if (mAtNotch) {
      this.positions[0] = (this.positions[0] + 1) % 26;
      this.positions[1] = (this.positions[1] + 1) % 26;
    } else if (rAtNotch) {
      this.positions[1] = (this.positions[1] + 1) % 26;
    }
    this.positions[2] = (this.positions[2] + 1) % 26;
  }

  processChar(inputChar: string): { outputChar: string; path: string[] } {
    const upper = inputChar.toUpperCase();
    if (!/^[A-Z]$/.test(upper)) {
      return { outputChar: inputChar, path: [inputChar] };
    }

    // Step rotors before encryption
    this.step();

    const path: string[] = [upper];

    // 1. Plugboard in
    let c = this.plugboard.get(upper) || upper;
    path.push(`Plugboard: ${c}`);

    // Forward through rotors (Right -> Middle -> Left)
    const rotorOrder = [this.rotorOrder[2], this.rotorOrder[1], this.rotorOrder[0]];
    const pos = [this.positions[2], this.positions[1], this.positions[0]];
    const rng = [this.rings[2], this.rings[1], this.rings[0]];

    let val = c.charCodeAt(0) - 65;

    for (let i = 0; i < 3; i++) {
      const rotor = ENIGMA_ROTORS[rotorOrder[i]];
      const offset = pos[i] - rng[i];
      val = mod(val + offset, 26);
      const wireOut = rotor.wiring[val].charCodeAt(0) - 65;
      val = mod(wireOut - offset, 26);
      path.push(`Rotor ${rotorOrder[i]} Forward: ${String.fromCharCode(val + 65)}`);
    }

    // Reflector
    val = this.reflector[val].charCodeAt(0) - 65;
    path.push(`Reflector: ${String.fromCharCode(val + 65)}`);

    // Reverse through rotors (Left -> Middle -> Right)
    for (let i = 2; i >= 0; i--) {
      const rotor = ENIGMA_ROTORS[rotorOrder[i]];
      const offset = pos[i] - rng[i];
      val = mod(val + offset, 26);
      const wireChar = String.fromCharCode(val + 65);
      const revIdx = rotor.wiring.indexOf(wireChar);
      val = mod(revIdx - offset, 26);
      path.push(`Rotor ${rotorOrder[i]} Reverse: ${String.fromCharCode(val + 65)}`);
    }

    // Plugboard out
    let finalChar = String.fromCharCode(val + 65);
    finalChar = this.plugboard.get(finalChar) || finalChar;
    path.push(`Lampboard: ${finalChar}`);

    return { outputChar: finalChar, path };
  }

  processText(text: string): { output: string; finalPositions: [string, string, string] } {
    let output = "";
    for (const char of text) {
      if (/^[a-zA-Z]$/.test(char)) {
        output += this.processChar(char).outputChar;
      } else {
        output += char;
      }
    }
    const finalPositions: [string, string, string] = [
      String.fromCharCode(this.positions[0] + 65),
      String.fromCharCode(this.positions[1] + 65),
      String.fromCharCode(this.positions[2] + 65),
    ];
    return { output, finalPositions };
  }
}

// ==========================================
// 11. CRYPTANALYSIS ALGORITHMS
// ==========================================
export const ENGLISH_FREQ: Record<string, number> = {
  E: 12.02, T: 9.10, A: 8.12, O: 7.68, I: 7.31, N: 6.95, S: 6.28, R: 6.02,
  H: 5.92, D: 4.32, L: 3.98, C: 2.71, U: 2.88, M: 2.61, W: 2.09, F: 2.30,
  G: 2.03, Y: 2.11, P: 1.82, B: 1.49, V: 1.11, K: 0.69, X: 0.17, Q: 0.11,
  J: 0.10, Z: 0.07,
};

export function analyzeFrequency(text: string): {
  counts: Record<string, number>;
  frequencies: Record<string, number>;
  totalLetters: number;
  sortedByFreq: { letter: string; freq: number; count: number; englishFreq: number }[];
} {
  const counts: Record<string, number> = {};
  for (const l of ALPHABET) counts[l] = 0;

  let totalLetters = 0;
  for (const char of text.toUpperCase()) {
    if (ALPHABET.includes(char)) {
      counts[char]++;
      totalLetters++;
    }
  }

  const frequencies: Record<string, number> = {};
  for (const l of ALPHABET) {
    frequencies[l] = totalLetters > 0 ? (counts[l] / totalLetters) * 100 : 0;
  }

  const sortedByFreq = ALPHABET.split("")
    .map((l) => ({
      letter: l,
      freq: frequencies[l],
      count: counts[l],
      englishFreq: ENGLISH_FREQ[l] || 0,
    }))
    .sort((a, b) => b.freq - a.freq);

  return { counts, frequencies, totalLetters, sortedByFreq };
}

/**
 * Kasiski Examination to infer Vigenère Key Length
 */
export function kasiskiExamination(text: string, gramLength: number = 3): {
  repeatedGrams: { gram: string; positions: number[]; distances: number[] }[];
  factorFrequencies: { factor: number; count: number }[];
  suggestedKeyLengths: number[];
} {
  const clean = text.toUpperCase().replace(/[^A-Z]/g, "");
  const occurrences = new Map<string, number[]>();

  for (let i = 0; i <= clean.length - gramLength; i++) {
    const gram = clean.slice(i, i + gramLength);
    const list = occurrences.get(gram) || [];
    list.push(i);
    occurrences.set(gram, list);
  }

  const repeatedGrams: { gram: string; positions: number[]; distances: number[] }[] = [];
  const allDistances: number[] = [];

  occurrences.forEach((positions, gram) => {
    if (positions.length > 1) {
      const distances: number[] = [];
      for (let i = 0; i < positions.length - 1; i++) {
        const d = positions[i + 1] - positions[i];
        distances.push(d);
        allDistances.push(d);
      }
      repeatedGrams.push({ gram, positions, distances });
    }
  });

  // Calculate factor counts for distances (from 2 up to 16)
  const factorCounts: Record<number, number> = {};
  for (let f = 2; f <= 16; f++) {
    factorCounts[f] = 0;
    for (const d of allDistances) {
      if (d % f === 0) factorCounts[f]++;
    }
  }

  const factorFrequencies = Object.entries(factorCounts)
    .map(([f, count]) => ({ factor: Number(f), count }))
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count);

  const suggestedKeyLengths = factorFrequencies.slice(0, 3).map((item) => item.factor);

  return { repeatedGrams, factorFrequencies, suggestedKeyLengths };
}

/**
 * Brute-force Caesar Cracker with English dictionary heuristic
 */
const COMMON_ENGLISH_WORDS = ["THE", "AND", "THAT", "HAVE", "FOR", "NOT", "WITH", "YOU", "THIS", "BUT", "HIS", "FROM", "THEY"];

export function bruteForceCaesar(ciphertext: string): { shift: number; decrypted: string; score: number }[] {
  const clean = ciphertext.toUpperCase();
  const results: { shift: number; decrypted: string; score: number }[] = [];

  for (let shift = 0; shift < 26; shift++) {
    const dec = caesarDecrypt(clean, shift);
    let score = 0;
    for (const word of COMMON_ENGLISH_WORDS) {
      const matches = dec.match(new RegExp(`\\b${word}\\b`, "g"));
      if (matches) score += matches.length * 10;
    }
    // Letter frequency bonus
    for (const c of dec) {
      if ("ETAOIN".includes(c)) score += 1;
    }
    results.push({ shift, decrypted: dec, score });
  }

  return results.sort((a, b) => b.score - a.score);
}
