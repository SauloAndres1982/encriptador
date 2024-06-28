let claro = "abcdefghijklmnopqrstuvwxyz";
let cifrado = "zyxwvutsrqponmlkjihgfedcba";

function encriptador() {
    let texto = document.getElementById("inputTexto", ).value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco")
    salida = ""

    for (i=0; i < texto.length; i++){
        if (claro.includes(texto[i])){
            indice = claro.indexOf(texto[i]);
            salida += cifrado[indice];
        }        
    }
    if (document.getElementById("inputTexto", ).value !=0){
        document.getElementById("inputTexto", ).value = texto
        tituloMensaje.textContent = salida;
        parrafo.textContent = "";
    }
    else {
        document.getElementById("muneco").src = "./Muñeco.png";
        alert("Debes ingresar el texto")
    }
}

function desencriptador() {
    let texto = document.getElementById("inputTexto", ).value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco")
    salida = ""

    for (i=0; i < texto.length; i++){
        if (claro.includes(texto[i])){
            indice = claro.indexOf(texto[i]);
            salida += cifrado[indice];
        }
    }
    if (texto.length !=0){
        texto = salida;
        tituloMensaje.textContent = texto;
        parrafo.textContent = "";
        muneco.src = "./Logo.png"
    }
    else {
        muñeco.src = "./Muñeco.png";
        alert("Debes ingresar el texto")
    }
    texto = ""
}
encriptador()
desencriptador()