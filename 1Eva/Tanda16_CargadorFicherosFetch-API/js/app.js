document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarAPI);

function cargarTXT() {
    fetch('datos.txt')
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            document.getElementById('resultado').innerHTML = data;
        })
        .catch(function(error) {
            console.log(error);
        });
}

function cargarJSON() {
    fetch('empleados.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            let lista = '';
            data.forEach(function(empleado) {
                lista += `
                    <li>${empleado.nombre} ${empleado.puesto}</li>
                `;
            })
            document.getElementById('resultado').innerHTML = lista;
        })
        .catch(function(error) {
            console.log(error);
        });
}

function cargarAPI() {
    fetch('https://picsum.photos/list')
        .then(function(response) {
            return response.json();
        })
        .then(function(imagenes) {
            let lista ='';
            imagenes.forEach(function(imagen) {
                lista += `
                        <li><a target="_blank" href="${imagen.post_url}">Ver Imagen</a> ${imagen.author}</li>
                    `;
            });
            document.getElementById('resultado').innerHTML = lista;
        })
}