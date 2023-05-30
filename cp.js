function copiarTexto() {
    var mensaje = document.getElementById("msg");

    navigator.clipboard.writeText(mensaje.value);
}

var boton3 = document.querySelector("#btn-copy"); boton3.onclick = copiarTexto;