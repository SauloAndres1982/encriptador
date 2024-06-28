function encriptador() {
    const password = "1234";
    const key = CryptoJS.SHA256(password);
    const iv = CryptoJS.lib.WordArray.random(16);
    //const texto = prompt("Ingrese el texto a encriptar");
    const mensajeCifrado = CryptoJS.AES.encrypt(texto, key, { iv: iv }).toString();
    console.log(`El mensaje cifrado es: ${mensajeCifrado}`);
    localStorage.setItem('iv', iv.toString());
    localStorage.setItem('mensajeCifrado', mensajeCifrado);
}

function desencriptador() {
    const password = "1234";
    const key = CryptoJS.SHA256(password);
    const iv = CryptoJS.enc.Hex.parse(localStorage.getItem('iv'));
    const mensajeCifrado =  prompt("Ingrese el texto a encriptar");
    const bytes = CryptoJS.AES.decrypt(mensajeCifrado, key, { iv: iv });
    const textoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    console.log(`El texto desencriptado es: ${textoDesencriptado}`);
}

// function desencriptador (){
//    // texto = prompt("Ingrese el texto a desencriptar");
//     // console.log(`el texto desemencriptado es ${texto}`);
//     // return `el texto encriptado es ${texto}`;
//}
encriptador()
desencriptador()