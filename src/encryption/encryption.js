const crypto = require('crypto');

const ALGORITHM = 'aes-256-gcm';
let KEY = '';
const IV_LENGTH = 12;

function generateAESKey() {
  const key = crypto.randomBytes(32); // 32 bytes for AES-256
  return key.toString('base64'); // Convert to base64 string for storage
}

function encryptionExample() {

  const aesKeyStr = generateAESKey();
  console.log(aesKeyStr);
  KEY = Buffer.from(aesKeyStr, 'base64');

  const encryptedValue = encryptUrlSafe('TX-3103BB59A094-42A5-9265-2247568C1CAA-32:686d1c628c226fab7b016bd5');
  console.log('Encrypted Value:', encryptedValue)

  const decryptedValue = decryptUrlSafe(encryptedValue);
  console.log('Decrypted Value:', decryptedValue)
}

function toBase64UrlSafe(buf) {
  return buf.toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, ''); // strip padding
}

function fromBase64UrlSafe(str) {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  // Add padding back if needed
  while (str.length % 4) str += '=';
  return Buffer.from(str, 'base64');
}

function encryptUrlSafe(plainText) {
  const iv = crypto.randomBytes(IV_LENGTH); // fresh IV every time
  const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);

  let encrypted = Buffer.concat([
    cipher.update(plainText, 'utf8'),
    cipher.final()
  ]);

  const authTag = cipher.getAuthTag();

  return [
    toBase64UrlSafe(iv),
    toBase64UrlSafe(encrypted),
    toBase64UrlSafe(authTag)
  ].join(':');
}

function decryptUrlSafe(encryptedText) {
  const [ivStr, encryptedStr, authTagStr] = encryptedText.split(':');

  const iv = fromBase64UrlSafe(ivStr);
  const encrypted = fromBase64UrlSafe(encryptedStr);
  const authTag = fromBase64UrlSafe(authTagStr);

  const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);
  decipher.setAuthTag(authTag);

  const decrypted = Buffer.concat([
    decipher.update(encrypted), decipher.final()
  ]);

  return decrypted.toString('utf8');
}

function driver() {
  encryptionExample();
}

module.exports.driver = driver;
