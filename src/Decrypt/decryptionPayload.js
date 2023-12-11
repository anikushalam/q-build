var CryptoJS = require("crypto-js");

export const decryption = (data) =>{
    var bytes = CryptoJS.AES.decrypt(data, 'QVIPLESAASPLATFORM');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData  
}

export const encryptLocalStorage = (message) => {
    return CryptoJS.AES.encrypt(JSON.stringify(message), 'QVIPLESAASPLATFORM').toString()
}

export const decryptLocalStorage = (data) => {
    var bytes = CryptoJS.AES.decrypt(data, 'QVIPLESAASPLATFORM');
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));  
}