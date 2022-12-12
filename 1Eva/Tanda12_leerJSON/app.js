window.onload
{
    document.getElementById('botAceptar').addEventListener('click', descargaArchivo);
}
function descargaArchivo(){
    // Obtener la instancia del objeto XMLHttpRequest
    let xhr = new XMLHttpRequest();

    // Preparar la funcion de respuesta 
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {

            let JSONObject = JSON.parse(xhr.responseText);

            document.getElementById("nombre").innerHTML = JSONObject.nombre;
            document.getElementById("apellido").innerHTML = JSONObject.apellido;
        }
    }

    // Realizar peticion HTTP
    xhr.open("GET", "cuento.JSON", true);
    xhr.send();
}
function cambiarNombre(){

}