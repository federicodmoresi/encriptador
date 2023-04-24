var textoEntrado = document.querySelector("#textoEntrado");
var textoResultante = document.querySelector("#textoResultante")
var botonEncriptar = document.querySelector("#botonEncriptar");
var botonDesencriptar = document.querySelector("#botonDesencriptar");
var botonCopiar = document.querySelector("#botonCopiar");
var reemplazarA = "ai";
var reemplazarE = "enter";
var reemplazarI = "imes";
var reemplazarO = "ober";
var reemplazarU = "ufat";

function encriptar() {

    var textoParaEncriptar = textoEntrado.value.toLowerCase();
    var textoEncriptado = "";

    for (contador = 0; contador < textoParaEncriptar.length; contador++) {

        if (textoParaEncriptar[contador] == "á" || textoParaEncriptar[contador] == "é" || textoParaEncriptar[contador] == "í" || textoParaEncriptar[contador] == "ó" || textoParaEncriptar[contador] == "ú") {

            return alert("No se permiten acentos ni mayúsculas: " + textoParaEncriptar[contador]);
        
        } else if (textoParaEncriptar[contador] == "a") {

            textoEncriptado = textoEncriptado + reemplazarA;

        } else if (textoParaEncriptar[contador] == "e") {

            textoEncriptado = textoEncriptado + reemplazarE;

        } else if (textoParaEncriptar[contador] == "i") {

            textoEncriptado = textoEncriptado + reemplazarI;

        } else if (textoParaEncriptar[contador] == "o") {

            textoEncriptado = textoEncriptado + reemplazarO;
        } else if (textoParaEncriptar[contador] == "u") {

            textoEncriptado = textoEncriptado + reemplazarU;

        } else {

            textoEncriptado = textoEncriptado + textoParaEncriptar[contador];

        }

    }
    document.getElementById("imagen-muneco").style.display = "none"
    document.getElementById("no-hay-texto").style.display = "none"
    document.getElementById("textoResultante").style.display = "inline-block"
    textoResultante.value = textoEncriptado;


}


function desencriptar() {
    document.getElementById("imagen-muneco").style.display = "none"
    document.getElementById("no-hay-texto").style.display = "none"
    document.getElementById("textoResultante").style.display = "inline"

    var textoParaDesencriptar = textoEntrado.value;
    var textoDesencriptado = "";

    textoDesencriptado = textoParaDesencriptar.replaceAll(reemplazarA, "a");
    textoDesencriptado = textoDesencriptado.replaceAll(reemplazarE, "e");
    textoDesencriptado = textoDesencriptado.replaceAll(reemplazarI, "i");
    textoDesencriptado = textoDesencriptado.replaceAll(reemplazarO, "o");
    textoDesencriptado = textoDesencriptado.replaceAll(reemplazarU, "u");

    textoResultante.value = textoDesencriptado;
}

function copiarPortapapeles() {

    navigator.clipboard.writeText(textoResultante.value);
}


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarPortapapeles