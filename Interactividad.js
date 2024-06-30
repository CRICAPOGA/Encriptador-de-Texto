/*
METODO DE ENCRIPTACIÓN
El metodo de encriptación utilizado es una modificación propia
del algoritmo de encriptación Cesar; La encriptación Cesar consiste
en desplazar los caracteres del mensaje una cierta cantidad de
espacios.
Por ejemplo.
Clave: 3
Entrada: A
    A -> +1 = B
    A -> +2 = C
    A -> +3 = D
Salida: D

Mi modificación consiste en darle un valor de orden desde 0 a 699
a cada caracter.
Reglas:
- Si el valor del caracter es par que se desplace 4 caracteres adelante
- Si el valor del caracter es impar que se desplace 4 caracteres atras

*/

function encriptar() {
  //Encriptación Cesar (4)
  let texto = document.querySelector("#entrada").value;
  document.querySelector("#entrada").value = ""; //Vaciar campo de texto
  document.querySelector("#salida").value = ""; //Vaciar salida

  //Calcular el largo de caracteres
  if (texto.length <= 700) {
    //Pasar de caracteres a valores Ascii
    let textoAscii = texto.split("");
    for (let i = 0; i < textoAscii.length; i++) {
      //Metodo de encriptación
      if (i % 2 == 0) {
        textoAscii[i] = textoAscii[i].charCodeAt(0) + 4; //Almacena el valor en Ascii + 4 en el arreglo
      } else {
        textoAscii[i] = textoAscii[i].charCodeAt(0) - 4; //Almacena el valor en Ascii + 4 en el arreglo
      }
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
      //Solo muentra la imagen en caso de que sea en pc
      if (anchoPantalla > 768) {
        document.querySelector("#imagen").style.display = "flex";
      }
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
      //Metodo de encriptación
      if (i % 2 == 0) {
        textoAscii[i] = textoAscii[i].charCodeAt(0) - 4; //Almacena el valor en Ascii + 4 en el arreglo
      } else {
        textoAscii[i] = textoAscii[i].charCodeAt(0) + 4; //Almacena el valor en Ascii + 4 en el arreglo
      }
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
      if (anchoPantalla > 768) {
        document.querySelector("#imagen").style.display = "flex";
      }
      document.querySelector("#botonCopiar").style.visibility = "hidden";
      document.querySelector("aside").style.alignItems = "center";
      document.querySelector("aside").style.justifyContent = "center";
      document.querySelector("aside").style.justifyContent = "space-between";

      document.querySelector("#salida").innerHTML =
        "Ingresa el texto que desees encriptar o desencriptar.";
    }
  } else {
    alert("El texto no puede superar los 700 caracteres");
  }
}

function copiar() {
  const texto = document.querySelector("#salida");
  navigator.clipboard.writeText(texto.textContent);
}
