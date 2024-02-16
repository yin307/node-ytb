const crypto = require("crypto");
var path = require("path");
const fs = require("fs");

// var absolutepath = path.resolve("./clientPrivateKey.pem");
// var privatekey = fs.readFileSync(absolutepath, "utf8");
// // console.log(privatekey);
// let Ciphertext = 'wCBbXOI9+koJsRXikTODjBYeLiMhdcBL+Hl6rfjzek4iwTEFQFo5LtzwvtZc0xrDePlNB9X0FS8W3NLbLBr3HtYtk3t7UW41sruU4LocSvgTEwtyt8YnkMgJ+QFLUJQCkVlrqYBr1VFazcQUQZ8aGzo6ttbQ4nDjDS5PJByjHxd408Dml8XR48nUH3eIl2QN7ypHmAHlZISqCtaPOZRyxptLXj4D1UWUj6Y2NSfYzBy56w06iNvV0MUi6Gd62nPMWOKlFaTBnvkp/WAmeMX8jqOT7Wio+og3pWWvD7n11ol4w1M3ynuSVH1gCLNZrjeKGOlC3CVpvAT6odq+beKfYg=='
// Ciphertext = Buffer.from(Ciphertext, "base64")

// // console.log(Ciphertext.length)
// const decryptedData = crypto.privateDecrypt({
//     key: privatekey,
//     padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
//     oaepHash: "sha256",
// }, Ciphertext)

// // The decrypted data is of the Buffer type, which we can convert to a
// // string to reveal the original data
// console.log("decrypted data: ", decryptedData.toString());

// const secret_iv = decryptedData.toString().split("|")[0];
// const secret_key = decryptedData.toString().split("|")[1];

const key = crypto
    .createHash('sha256')
    .update("aZC9nFC7prUnA+ehJMgL5fcMix58muLFABdYpt9wqds=")
    .digest('base64')
    .substring(0, 32)
const encryptionIV = crypto
    .createHash('sha256')
    .update("AAAAAAAAAAAAAAAAAAAAAA==")
    .digest('base64')
    .substring(0, 16)
    // const cipher = crypto.createCipheriv("aes-256-gcm", key, encryptionIV);
    // const decipher = crypto.createDecipheriv("aes-256-gcm", key, encryptionIV);
    // let key = crypto.createHash('sha256').update(String(secret)).digest('base64').substr(0, 32);
    const decipher = crypto.createDecipheriv("aes-256-gcm", key, "AAAAAAAAAAAAAAAAAAAAAA==");

    let decryptedData = decipher.update("wCBbXOI9+koJsRXikTODjBYeLiMhdcBL+Hl6rfjzek4iwTEFQFo5LtzwvtZc0xrDePlNB9X0FS8W3NLbLBr3HtYtk3t7UW41sruU4LocSvgTEwtyt8YnkMgJ+QFLUJQCkVlrqYBr1VFazcQUQZ8aGzo6ttbQ4nDjDS5PJByjHxd408Dml8XR48nUH3eIl2QN7ypHmAHlZISqCtaPOZRyxptLXj4D1UWUj6Y2NSfYzBy56w06iNvV0MUi6Gd62nPMWOKlFaTBnvkp/WAmeMX8jqOT7Wio+og3pWWvD7n11ol4w1M3ynuSVH1gCLNZrjeKGOlC3CVpvAT6odq+beKfYg==", "hex", "utf-8");
    
    decryptedData += decipher.final("utf8");
    
    console.log("Decrypted message: " + decryptedData);

