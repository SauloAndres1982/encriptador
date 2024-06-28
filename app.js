let claro = "abcdefghijklmnopqrstuvwxyz";
let cifrado = "zyxwvutsrqponmlkjihgfedcba";

function encriptador() {
    let texto = document.getElementById("inputTexto", ).value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco")
    salida = ""
    const reemplazos = {
        'a': 'xy',
        'e': 'zw',
        'i': 'pq',
        'o': 'rs',
        'u': 'mn',
        'A': 'XY',
        'E': 'ZW',
        'I': 'PQ',
        'O': 'RS',
        'U': 'MN'
    };

    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        if (reemplazos[caracter]) {
            salida += reemplazos[caracter];
        } else {
            salida += caracter;
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
    const reemplazosInversos = {
        'xy': 'a',
        'zw': 'e',
        'pq': 'i',
        'rs': 'o',
        'mn': 'u',
        'XY': 'A',
        'ZW': 'E',
        'PQ': 'I',
        'RS': 'O',
        'MN': 'U'
    };

    let i = 0;
    while (i < texto.length) {
        const parCaracteres = texto.slice(i, i + 2);
        if (reemplazosInversos[parCaracteres]) {
            salida += reemplazosInversos[parCaracteres];
            i += 2; // Saltar los dos caracteres
        } else {
            salida += texto[i];
            i += 1; // Saltar un carácter
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
