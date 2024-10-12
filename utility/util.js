function renameKey(obj, oldKey, newKey) {
  obj[newKey] = obj[oldKey]
  delete obj[oldKey]
}


//below is the encrypt and decrypt code


  // crypto module
  const crypto = require("crypto");

  const algorithm = "aes-256-cbc";
  
  const initVector = Buffer.from("0123456789abcdef");
  // console.log(initVector);
  
  const Securitykey = Buffer.from("0123456789abcdef0123456789abcdef");
  // console.log(Securitykey);
  
  function hash_code(message) {
      const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
      let encryptedData = cipher.update(message, "utf-8", "hex");
      encryptedData += cipher.final("hex");
      // console.log("Encrypted message: " + encryptedData);
      return encryptedData;
  }
  
  function decrypt_code(encryptedData) {
      const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
      let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
      decryptedData += decipher.final("utf8");
      // console.log("Decrypted message: " + decryptedData);
      return decryptedData;
  }
  
  // console.log(hash_code("abc@1234"));
  // console.log(decrypt_code(hash_code("abc@1234")));

module.exports={renameKey,hash_code,decrypt_code};  