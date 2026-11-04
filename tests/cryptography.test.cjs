const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("cryptography engine and algorithms verification", async (t) => {
  const {
    caesarEncrypt,
    caesarDecrypt,
    caesarArabicEncrypt,
    caesarArabicDecrypt,
    cleanAndNormalizeArabicText,
    ARABIC_ALPHABET,
    substitutionEncrypt,
    substitutionDecrypt,
    affineEncrypt,
    affineDecrypt,
    VALID_AFFINE_A,
    buildPlayfairMatrix,
    preparePlayfairText,
    playfairProcess,
    det2x2,
    invertMatrix2x2,
    hillProcess2x2,
    vigenereEncrypt,
    vigenereDecrypt,
    rowTranspositionEncrypt,
    rowTranspositionDecrypt,
    productCipherPipeline,
    otpProcess,
    generateOtpKey,
    EnigmaMachine,
    analyzeFrequency,
    kasiskiExamination,
    bruteForceCaesar,
    gcd,
    modInverse,
    mod,
  } = await import("../src/lib/crypto-engine.ts");

  await t.test("1. English Caesar Cipher correctly encrypts, decrypts, and wraps Mod 26", () => {
    assert.equal(caesarEncrypt("HELLO WORLD", 3), "KHOOR ZRUOG");
    assert.equal(caesarDecrypt("KHOOR ZRUOG", 3), "HELLO WORLD");
    assert.equal(caesarEncrypt("XYZ", 3), "ABC");
    assert.equal(caesarDecrypt("ABC", 3), "XYZ");
    // Preserve case and punctuation
    assert.equal(caesarEncrypt("Hello, World! 123", 4), "Lipps, Asvph! 123");
    assert.equal(caesarDecrypt("Lipps, Asvph! 123", 4), "Hello, World! 123");
    // Modulo 26 wrap-around with large or negative shifts
    assert.equal(caesarEncrypt("A", 26), "A");
    assert.equal(caesarEncrypt("A", 52), "A");
    assert.equal(caesarEncrypt("A", -1), "Z");
  });

  await t.test("2. Arabic Caesar Cipher (Mod 28) correctly shifts, wraps, and reverses", () => {
    assert.equal(ARABIC_ALPHABET.length, 28);
    // Shift 'أ' by 3 -> 'ث'
    assert.equal(caesarArabicEncrypt("أ", 3), "ث");
    assert.equal(caesarArabicDecrypt("ث", 3), "أ");

    // Wrap around end of alphabet
    // 'ي' is index 27. (27 + 1) mod 28 = 0 -> 'أ'
    assert.equal(caesarArabicEncrypt("ي", 1), "أ");
    assert.equal(caesarArabicDecrypt("أ", 1), "ي");

    // Full sentence round-trip
    const original = "أهلاً بك في مختبر التشفير";
    const enc = caesarArabicEncrypt(original, 5);
    const dec = caesarArabicDecrypt(enc, 5);
    // Normalized comparison
    assert.equal(cleanAndNormalizeArabicText(dec), cleanAndNormalizeArabicText(original));

    // Full 28-shift periodicity
    assert.equal(caesarArabicEncrypt("علم", 28), "علم");
    assert.equal(caesarArabicEncrypt("علم", 56), "علم");
  });

  await t.test("3. Julius Caesar Controller & Legacy Script prevents window jumping", () => {
    const legacyJs = fs.readFileSync(path.join(__dirname, "../public/legacy/assets/js/caesar.js"), "utf8");
    // Must NOT use window-scrolling scrollIntoView
    assert.ok(!legacyJs.includes("scrollIntoView"), "caesar.js must not call scrollIntoView because it jumps the whole browser window");
    // Must use container-scoped scrollTo
    assert.ok(legacyJs.includes("stepsLog.scrollTo"), "caesar.js should scroll only inside stepsLog container");
    // Must have navigation helpers
    assert.ok(legacyJs.includes("jumpToEnd"), "caesar.js should support jumping to end of steps");
    assert.ok(legacyJs.includes("toggleAutoPlay"), "caesar.js should support auto-play stepping");
  });

  await t.test("4. Monoalphabetic Substitution works and reverses cleanly", () => {
    const key = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const enc = substitutionEncrypt("ATTACK AT DAWN", key);
    const dec = substitutionDecrypt(enc, key);
    assert.equal(dec, "ATTACK AT DAWN");

    // Preserves lowercase and non-alphabetical
    const mixed = substitutionEncrypt("Hello, World!", key);
    const revMixed = substitutionDecrypt(mixed, key);
    assert.equal(revMixed, "Hello, World!");
  });

  await t.test("5. Affine Cipher validates all 12 valid multipliers and coprimality", () => {
    assert.deepEqual(VALID_AFFINE_A, [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25]);
    for (const a of VALID_AFFINE_A) {
      assert.equal(gcd(a, 26), 1, `Multiplier ${a} must be coprime to 26`);
      const inv = modInverse(a, 26);
      assert.ok(inv !== null, `Inverse of ${a} mod 26 must exist`);
      assert.equal(mod(a * inv, 26), 1, `${a} * ${inv} must equal 1 mod 26`);

      const text = "AFFINETEST";
      const enc = affineEncrypt(text, a, 7);
      assert.equal(enc.valid, true);
      const dec = affineDecrypt(enc.result, a, 7);
      assert.equal(dec.valid, true);
      assert.equal(dec.result, text);
    }

    // Invalid non-coprime multipliers must be rejected
    for (const invalidA of [2, 4, 6, 13, 26]) {
      const invRes = affineEncrypt("FAIL", invalidA, 5);
      assert.equal(invRes.valid, false);
      assert.ok(invRes.error);
    }
  });

  await t.test("6. Playfair Cipher constructs 5x5 matrix and handles all digram rules", () => {
    const matrix = buildPlayfairMatrix("MONARCHY");
    assert.equal(matrix.length, 5);
    assert.equal(matrix[0].length, 5);
    assert.equal(matrix[0][0], "M");

    // Prepares text with duplicate splitting and 'X' padding
    const prep = preparePlayfairText("BALLOON");
    assert.ok(prep.digrams.some(([a, b]) => a === "L" && b === "X"));

    // Odd length text is padded
    const oddPrep = preparePlayfairText("CAT");
    assert.equal(oddPrep.digrams.length, 2);
    assert.equal(oddPrep.digrams[1][1], "X");

    // Roundtrip verification
    const proc = playfairProcess(matrix, prep.digrams, false);
    const rev = playfairProcess(matrix, proc.steps.map(s => s.cipherPair), true);
    assert.equal(rev.output, prep.digrams.map(d => d.join("")).join(""));
  });

  await t.test("7. Hill Cipher 2x2 matrix multiplication and invertibility", () => {
    const keyMatrix = [[3, 3], [2, 5]];
    const det = det2x2(keyMatrix);
    assert.equal(det, 9);
    assert.equal(gcd(det, 26), 1);
    assert.ok(invertMatrix2x2(keyMatrix) !== null);

    const hillEnc = hillProcess2x2("HELP", keyMatrix, false);
    assert.equal(hillEnc.valid, true);
    const hillDec = hillProcess2x2(hillEnc.output, keyMatrix, true);
    assert.equal(hillDec.valid, true);
    assert.equal(hillDec.output, "HELP");

    // Non-invertible matrix rejected
    const badMatrix = [[2, 4], [4, 8]]; // det = 0
    const badRes = hillProcess2x2("HELP", badMatrix, false);
    assert.equal(badRes.valid, false);
  });

  await t.test("8. Vigenère Cipher polyalphabetic shifts and decryption", () => {
    const text = "MICHIGANTECHNOLOGICALUNIVERSITY";
    const key = "HOUGHTON";
    const enc = vigenereEncrypt(text, key);
    const dec = vigenereDecrypt(enc.output, key);
    assert.equal(dec.output, text);

    // Repeated key preserves casing
    const mixed = "AttackAtDawn";
    const encMixed = vigenereEncrypt(mixed, "LEMON");
    const decMixed = vigenereDecrypt(encMixed.output, "LEMON");
    assert.equal(decMixed.output, mixed);
  });

  await t.test("9. Row Transposition Cipher permutes columns and reconstructs correctly", () => {
    const text = "ATTACKATDAWN";
    const key = "3142";
    const enc = rowTranspositionEncrypt(text, key);
    assert.equal(enc.numCols, 4);
    assert.equal(enc.numRows, 3);
    const dec = rowTranspositionDecrypt(enc.output, key);
    assert.ok(dec.output.startsWith("ATTACKATDAWN"));

    // Alphabetical word key
    const wordEnc = rowTranspositionEncrypt("SECRETINFORMATION", "ZEBRA");
    const wordDec = rowTranspositionDecrypt(wordEnc.output, "ZEBRA");
    assert.ok(wordDec.output.startsWith("SECRETINFORMATION"));
  });

  await t.test("10. Product Cipher combines substitution and permutation stages", () => {
    const res = productCipherPipeline("CONFIDENTIAL", 5, "3142");
    assert.ok(res.input.length > 0);
    assert.ok(res.substituted.length > 0);
    assert.ok(res.transposed.length > 0);
    assert.notEqual(res.input, res.transposed);
    assert.notEqual(res.substituted, res.transposed);
  });

  await t.test("11. One-Time Pad Vernam bitwise XOR reversible encryption", () => {
    const msg = "TOP SECRET";
    const key = generateOtpKey(msg.length);
    assert.equal(key.length, msg.length);

    const otp1 = otpProcess(msg, key);
    const otp2 = otpProcess(otp1.output, key);
    assert.equal(otp2.output, msg);
  });

  await t.test("12. Enigma Machine 3-rotor simulation reciprocal property with plugboard", () => {
    const plugs = [["A", "F"], ["B", "V"], ["C", "W"]];
    const enigma1 = new EnigmaMachine(["I", "II", "III"], ["B", "E", "T"], [1, 2, 3], "B", plugs);
    const msg = "THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG";
    const enc = enigma1.processText(msg);

    // Enigma reciprocal property: same initial setup decrypts ciphertext
    const enigma2 = new EnigmaMachine(["I", "II", "III"], ["B", "E", "T"], [1, 2, 3], "B", plugs);
    const dec = enigma2.processText(enc.output);
    assert.equal(dec.output, msg);
  });

  await t.test("13. Frequency Analysis, Kasiski Examination, and Caesar Brute-Force", () => {
    const freq = analyzeFrequency("EEEEETTTTAAA");
    assert.equal(freq.sortedByFreq[0].letter, "E");
    assert.equal(freq.counts["E"], 5);

    const kas = kasiskiExamination("ABCDXYZABCDQWERABCD", 4);
    assert.ok(kas.repeatedGrams.some(g => g.gram === "ABCD"));
    assert.ok(kas.suggestedKeyLengths.length > 0);

    const bf = bruteForceCaesar("KHOOR ZRUOG");
    const bestMatch = bf.find(c => c.decrypted.includes("HELLO") && c.decrypted.includes("WORLD"));
    assert.ok(bestMatch);
    assert.equal(bestMatch.shift, 3);
  });
});
