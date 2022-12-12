window.onload
{
    document.getElementById('botJSON').addEventListener('click', recuperarContenido);
}
function recuperarContenido(){
    // Obtener la instancia del objeto XMLHttpRequest
    let peticion = new XMLHttpRequest();

    // Realizar peticion HTTP
    peticion.open("GET","marcadores.json",true);
    peticion.send(null);

    // Preparar la funcion de respuesta 
    peticion.onreadystatechange = function(){
        if ((peticion.readyState === 4) && (this.status === 200 )){

            // Guardamos toda la informacion en un array
            let info = JSON.parse(this.responseText);

            // Elemento donde mostramos la info en el html
            let contenido = document.getElementById("contenido");

            // Limpia el contendido por si se pulsa el boton y ya tenia algo escrito (anteriormente se ha pulsado el boton)
            contenido.innerHTML = "";

            // Mostramos los datos específicos que deseemos
            info.forEach(dato => {
                contenido.innerHTML += `
                    <tr>
                        <td>${dato.city}</td>
                        <td>${dato.description}</td>
                        <td>${dato.ranking}</td>
                    </tr>`;
            });
        }
    }
}