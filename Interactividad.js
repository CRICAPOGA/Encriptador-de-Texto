function encriptar() {
  //Encriptación Cesar (4)
  let texto = document.querySelector("#entrada").value;
    document.querySelector("#entrada").value = ""; //Vaciar campo de texto
    document.querySelector("#salida").value = "";//Vaciar salida

    //Calcular el largo de caracteres
    if (texto.length <= 700) {
        //Pasar de caracteres a valores Ascii
        let textoAscii = texto.split("");
        for (let i = 0; i < textoAscii.length; i++) {
            textoAscii[i] = textoAscii[i].charCodeAt(0) + 4; //Almacena el valor en Ascii + 4 en el arreglo
        }

        //Pasar de valores Ascii a Letra
        for (let i = 0; i < textoAscii.length; i++) {
            textoAscii[i] = String.fromCharCode(textoAscii[i]); //Almacena la letra Ascii en el arreglo
        }

        texto = textoAscii.join(""); //Array a String

        //Insertar el texto
        if (texto != "") {
          document.querySelector("#subtSalida").style.display = "none";
          document.querySelector("#imagen").style.display = "none";
          document.querySelector("#botonCopiar").style.visibility = "visible";
          document.querySelector("aside").style.alignItems = "flex-start";
          document.querySelector("aside").style.justifyContent = "space-between";

          document.querySelector("#salida").innerHTML = texto;
        } else {
          document.querySelector("#subtSalida").style.display = "flex";
          document.querySelector("#imagen").style.display = "flex";
          document.querySelector("#botonCopiar").style.visibility = "hidden";
          document.querySelector("aside").style.alignItems = "center";
          document.querySelector("aside").style.justifyContent = "center";

          document.querySelector("#salida").innerHTML =
            "Ingresa el texto que desees encriptar o desencriptar.";
        }
    } else {
        alert("El texto no puede superar los 700 caracteres");
    }
}

function desencriptar() {
  //Desencriptación Cesar (4)
  let texto = document.querySelector("#entrada").value;
  document.querySelector("#entrada").value = ""; //Vaciar campo de texto

    //Calcular el largo de caracteres
    if (texto.length <= 700) {
        //Pasar de caracteres a valores Ascii
        let textoAscii = texto.split("");
        for (let i = 0; i < textoAscii.length; i++) {
            textoAscii[i] = textoAscii[i].charCodeAt(0) - 4; //Almacena el valor en Ascii + 4 en el arreglo
        }

        //Pasar de valores Ascii a Letra
        for (let i = 0; i < textoAscii.length; i++) {
            textoAscii[i] = String.fromCharCode(textoAscii[i]); //Almacena la letra Ascii en el arreglo
        }

        texto = textoAscii.join(""); //Array a String

        //Insertar el texto
        if (texto != "") {
            document.querySelector("#subtSalida").style.display = "none";
            document.querySelector("#imagen").style.display = "none";
            document.querySelector("#botonCopiar").style.visibility = "visible";
            document.querySelector("aside").style.alignItems = "flex-start";
            document.querySelector("aside").style.justifyContent = "space-between";

            document.querySelector("#salida").innerHTML = texto;
        } else {
            document.querySelector("#subtSalida").style.display = "flex";
            document.querySelector("#imagen").style.display = "flex";
            document.querySelector("#botonCopiar").style.visibility = "hidden";
            document.querySelector("aside").style.alignItems = "center";
            document.querySelector("aside").style.justifyContent = "center";
            document.querySelector("aside").style.justifyContent = "space-between";

            document.querySelector("#salida").innerHTML = "Ingresa el texto que desees encriptar o desencriptar.";
        }
    } else {
        alert("El texto no puede superar los 700 caracteres");
    }
}

function copiar() {
    const texto = document.querySelector("#salida");
    navigator.clipboard.writeText(texto.textContent);
}