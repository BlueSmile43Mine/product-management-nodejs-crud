const crypto = require("crypto");
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

key.fill(0); // buffer format
iv.fill(0); // buffer format

//Encrypting text
const encrypt = (text) => {
  let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString("hex");
};
// Decrypting text
const decrypt = (text) => {
  let encryptedText = Buffer.from(text, "hex");
  let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};

module.exports = {
  encrypt,
  decrypt,
};
