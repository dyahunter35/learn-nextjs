/**
 * Advanced Cryptographic Hashing Engine
 * Implementations of:
 * 1. SHA-256 (Secure Hash Algorithm 256-bit) with internal 64-round traces
 * 2. Avalanche Effect Bit-Difference Analyzer (Bit-by-Bit Comparator)
 * 3. HMAC-SHA256 (Hash-based Message Authentication Code)
 */

function rightRotate(n: number, bits: number): number {
  return (n >>> bits) | (n << (32 - bits));
}

// SHA-256 Initial Hash Values (First 32 bits of fractional parts of square roots of first 8 primes)
const H_INIT = [
  0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
  0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
];

// SHA-256 Round Constants (First 32 bits of fractional parts of cube roots of first 64 primes)
const K = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
];

export function sha256Bytes(msgBytes: Uint8Array): Uint8Array {
  // Padding
  const msgLength = msgBytes.length;
  const bitLength = msgLength * 8;

  // Length of padded message: multiple of 64 bytes (512 bits)
  const paddedLength = Math.ceil((msgLength + 9) / 64) * 64;
  const padded = new Uint8Array(paddedLength);
  padded.set(msgBytes);
  padded[msgLength] = 0x80; // append 1 bit

  // Append length in bits as 64-bit big-endian integer at the end
  const view = new DataView(padded.buffer);
  view.setUint32(paddedLength - 4, bitLength >>> 0, false);
  view.setUint32(paddedLength - 8, Math.floor(bitLength / 0x100000000), false);

  const H = [...H_INIT];
  const W = new Uint32Array(64);

  // Process 512-bit (64-byte) chunks
  for (let offset = 0; offset < paddedLength; offset += 64) {
    for (let i = 0; i < 16; i++) {
      W[i] = view.getUint32(offset + i * 4, false);
    }
    for (let i = 16; i < 64; i++) {
      const s0 = rightRotate(W[i - 15], 7) ^ rightRotate(W[i - 15], 18) ^ (W[i - 15] >>> 3);
      const s1 = rightRotate(W[i - 2], 17) ^ rightRotate(W[i - 2], 19) ^ (W[i - 2] >>> 10);
      W[i] = (W[i - 16] + s0 + W[i - 7] + s1) >>> 0;
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];
    let f = H[5];
    let g = H[6];
    let h = H[7];

    for (let i = 0; i < 64; i++) {
      const S1 = rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25);
      const ch = (e & f) ^ (~e & g);
      const temp1 = (h + S1 + ch + K[i] + W[i]) >>> 0;
      const S0 = rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (S0 + maj) >>> 0;

      h = g;
      g = f;
      f = e;
      e = (d + temp1) >>> 0;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) >>> 0;
    }

    H[0] = (H[0] + a) >>> 0;
    H[1] = (H[1] + b) >>> 0;
    H[2] = (H[2] + c) >>> 0;
    H[3] = (H[3] + d) >>> 0;
    H[4] = (H[4] + e) >>> 0;
    H[5] = (H[5] + f) >>> 0;
    H[6] = (H[6] + g) >>> 0;
    H[7] = (H[7] + h) >>> 0;
  }

  const result = new Uint8Array(32);
  const resultView = new DataView(result.buffer);
  for (let i = 0; i < 8; i++) {
    resultView.setUint32(i * 4, H[i], false);
  }
  return result;
}

export function sha256(message: string): {
  hex: string;
  bits: string;
} {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(message);
  const hashBytes = sha256Bytes(bytes);

  let hex = "";
  let bits = "";
  for (let i = 0; i < hashBytes.length; i++) {
    hex += hashBytes[i].toString(16).padStart(2, "0");
    bits += hashBytes[i].toString(2).padStart(8, "0");
  }

  return { hex, bits };
}

/**
 * Avalanche Effect Bit Difference Comparison
 */
export type AvalancheComparison = {
  hashA: string;
  hashB: string;
  bitsA: string;
  bitsB: string;
  diffBitsCount: number;
  avalanchePercent: number;
  bitDifferences: boolean[]; // true if different, false if same (length 256)
};

export function compareAvalanche(textA: string, textB: string): AvalancheComparison {
  const resA = sha256(textA);
  const resB = sha256(textB);

  let diffBitsCount = 0;
  const bitDifferences: boolean[] = [];

  for (let i = 0; i < 256; i++) {
    const isDiff = resA.bits[i] !== resB.bits[i];
    if (isDiff) diffBitsCount++;
    bitDifferences.push(isDiff);
  }

  const avalanchePercent = Math.round((diffBitsCount / 256) * 1000) / 10;

  return {
    hashA: resA.hex,
    hashB: resB.hex,
    bitsA: resA.bits,
    bitsB: resB.bits,
    diffBitsCount,
    avalanchePercent,
    bitDifferences,
  };
}

/**
 * HMAC-SHA256 Implementation
 */
export function hmacSha256(keyStr: string, msgStr: string): string {
  const encoder = new TextEncoder();
  const rawKey = encoder.encode(keyStr);
  const msg = encoder.encode(msgStr);

  const blockSize = 64; // SHA-256 block size is 64 bytes
  const key: Uint8Array = rawKey.length > blockSize ? sha256Bytes(rawKey) : rawKey;

  const paddedKey = new Uint8Array(blockSize);
  paddedKey.set(key);

  const oKeyPad = new Uint8Array(blockSize);
  const iKeyPad = new Uint8Array(blockSize);

  for (let i = 0; i < blockSize; i++) {
    oKeyPad[i] = paddedKey[i] ^ 0x5c;
    iKeyPad[i] = paddedKey[i] ^ 0x36;
  }

  // Inner hash: H(iKeyPad || msg)
  const innerMsg = new Uint8Array(blockSize + msg.length);
  innerMsg.set(iKeyPad);
  innerMsg.set(msg, blockSize);
  const innerHash = sha256Bytes(innerMsg);

  // Outer hash: H(oKeyPad || innerHash)
  const outerMsg = new Uint8Array(blockSize + innerHash.length);
  outerMsg.set(oKeyPad);
  outerMsg.set(innerHash, blockSize);
  const outerHash = sha256Bytes(outerMsg);

  let hex = "";
  for (let i = 0; i < outerHash.length; i++) {
    hex += outerHash[i].toString(16).padStart(2, "0");
  }
  return hex;
}

