const test = require("node:test");
const assert = require("node:assert/strict");

test("cryptography engine and algorithms verification", async (t) => {
  const {
    caesarEncrypt,
    caesarDecrypt,
    substitutionEncrypt,
    substitutionDecrypt,
    affineEncrypt,
    affineDecrypt,
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
    EnigmaMachine,
    analyzeFrequency,
    kasiskiExamination,
    bruteForceCaesar,
    gcd,
    modInverse,
  } = await import("../src/lib/crypto-engine.ts");

  await t.test("1. Caesar Cipher correctly encrypts, decrypts, and wraps Mod 26", () => {
    assert.equal(caesarEncrypt("HELLO WORLD", 3), "KHOOR ZRUOG");
    assert.equal(caesarDecrypt("KHOOR ZRUOG", 3), "HELLO WORLD");
    assert.equal(caesarEncrypt("XYZ", 3), "ABC");
  });

  await t.test("2. Monoalphabetic Substitution works and reverses cleanly", () => {
    const key = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const enc = substitutionEncrypt("ATTACK", key);
    const dec = substitutionDecrypt(enc, key);
    assert.equal(dec, "ATTACK");
  });

  await t.test("3. Affine Cipher validates gcd coprime condition and modular inverse", () => {
    assert.equal(gcd(5, 26), 1);
    assert.equal(modInverse(5, 26), 21);
    const enc = affineEncrypt("AFFINE", 5, 8);
    assert.equal(enc.valid, true);
    const dec = affineDecrypt(enc.result, 5, 8);
    assert.equal(dec.valid, true);
    assert.equal(dec.result, "AFFINE");

    // Invalid multiplier not coprime to 26
    const invalid = affineEncrypt("TEST", 4, 8);
    assert.equal(invalid.valid, false);
  });

  await t.test("4. Playfair Cipher constructs 5x5 matrix and handles digram rules", () => {
    const matrix = buildPlayfairMatrix("MONARCHY");
    assert.equal(matrix.length, 5);
    assert.equal(matrix[0].length, 5);
    assert.equal(matrix[0][0], "M");

    const prep = preparePlayfairText("BALLOON");
    // BALLOON -> BA LX LO ON (due to LL repeat)
    assert.ok(prep.paddedText.includes("LX") || prep.digrams.some(d => d[1] === "X"));

    const proc = playfairProcess(matrix, prep.digrams, false);
    const rev = playfairProcess(matrix, proc.steps.map(s => s.cipherPair), true);
    assert.equal(rev.output, prep.digrams.map(d => d.join("")).join(""));
  });

  await t.test("5. Hill Cipher 2x2 matrix multiplication and invertibility", () => {
    const keyMatrix = [[3, 3], [2, 5]];
    assert.equal(det2x2(keyMatrix), 9);
    assert.ok(invertMatrix2x2(keyMatrix) !== null);

    const hillEnc = hillProcess2x2("HELP", keyMatrix, false);
    assert.equal(hillEnc.valid, true);
    const hillDec = hillProcess2x2(hillEnc.output, keyMatrix, true);
    assert.equal(hillDec.valid, true);
    assert.equal(hillDec.output, "HELP");
  });

  await t.test("6. Vigenère Cipher polyalphabetic shifts and decryption", () => {
    const text = "MICHIGANTECHNOLOGICALUNIVERSITY";
    const key = "HOUGHTON";
    const enc = vigenereEncrypt(text, key);
    const dec = vigenereDecrypt(enc.output, key);
    assert.equal(dec.output, text);
  });

  await t.test("7. Row Transposition Cipher permutes columns and reconstructs correctly", () => {
    const text = "ATTACKATDAWN";
    const key = "3142";
    const enc = rowTranspositionEncrypt(text, key);
    const dec = rowTranspositionDecrypt(enc.output, key);
    assert.ok(dec.output.startsWith("ATTACKATDAWN"));
  });

  await t.test("8. Product Cipher combines substitution and permutation stages", () => {
    const res = productCipherPipeline("CONFIDENTIAL", 5, "3142");
    assert.ok(res.input.length > 0);
    assert.ok(res.substituted.length > 0);
    assert.ok(res.transposed.length > 0);
    assert.notEqual(res.input, res.transposed);
  });

  await t.test("9. One-Time Pad Vernam bitwise XOR reversible encryption", () => {
    const msg = "SECRET";
    const key = "XMCKLN";
    const otp1 = otpProcess(msg, key);
    const otp2 = otpProcess(otp1.output, key);
    assert.equal(otp2.output, msg);
  });

  await t.test("10. Enigma Machine 3-rotor simulation reciprocal property with plugboard", () => {
    const plugs = [["A", "F"], ["B", "V"]];
    const enigma1 = new EnigmaMachine(["I", "II", "III"], ["A", "A", "A"], [0, 0, 0], "B", plugs);
    const enc = enigma1.processText("TOPSECRETWARMESSAGE");

    // Enigma is reciprocal: same starting settings decrypt the message
    const enigma2 = new EnigmaMachine(["I", "II", "III"], ["A", "A", "A"], [0, 0, 0], "B", plugs);
    const dec = enigma2.processText(enc.output);
    assert.equal(dec.output, "TOPSECRETWARMESSAGE");
  });

  await t.test("11. Frequency Analysis & Kasiski Examination infer key properties", () => {
    const freq = analyzeFrequency("EEEEETTTTAAA");
    assert.equal(freq.sortedByFreq[0].letter, "E");

    const kas = kasiskiExamination("ABCDXYZABCDQWERABCD", 4);
    assert.ok(kas.repeatedGrams.some(g => g.gram === "ABCD"));
    assert.ok(kas.suggestedKeyLengths.length > 0);

    const bf = bruteForceCaesar("KHOOR");
    assert.equal(bf.find(c => c.decrypted.includes("HELLO"))?.shift, 3);
  });
});

