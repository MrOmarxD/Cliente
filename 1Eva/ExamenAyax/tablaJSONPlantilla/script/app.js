window.onload
{
    document.getElementsByTagName('button')[0].addEventListener('click', recuperarContenido);
}
function recuperarContenido(){
    // Obtener la instancia del objeto XMLHttpRequest
    let peticion = new XMLHttpRequest();

    // Realizar peticion HTTP
    peticion.open("GET","tabla.json",true);
    peticion.send(null);

    // Preparar la funcion de respuesta 
    peticion.onreadystatechange = function(){
        if ((peticion.readyState === 4) && (this.status === 200 )){
            // Guardamos toda la informacion en un array
            let info = JSON.parse(this.responseText);

            // Elemento donde mostramos la info en el html
            let contenido = document.getElementById("contenido");
            let estadisticas = document.getElementById("estadisticas");

            // Limpia el contendido por si se pulsa el boton y ya tenia algo escrito (anteriormente se ha pulsado el boton)
            contenido.innerHTML = "";
            
            let tabla = document.createElement('table');
            let sumaEdad = 0;
            let cantidad = 0;
            let menorSalario = 1000000;
            let nombreMenorSalario = "";
            let mayorEdad = -1;
            let nombreMayorEdad = "";


            // Mostramos los datos específicos que deseemos
            tabla.innerHTML = "<tr><th>#</th><th>Nombre</th><th>Email</th><th>Edad</th><th>Estado</th><th>Salario</th></tr>";
            info.forEach(dato => {
                if(dato.salario>=document.getElementById('salarioMinimo').value || document.getElementById('salarioMinimo')==""){
                tabla.innerHTML += `
                    <tr>
                        <td>${dato.id}</td>
                        <td>${dato.nombre}</td>
                        <td>${dato.email}</td>
                        <td>${dato.edad}</td>
                        <td>${dato.estado}</td>
                        <td>${dato.salario}</td>
                    </tr>`;
                    if(menorSalario>dato.salario){
                        menorSalario = dato.salario;
                        nombreMenorSalario = dato.nombre;
                    }
                    if(mayorEdad<dato.edad){
                        mayorEdad = dato.edad;
                        nombreMayorEdad = dato.nombre;
                    }
                    sumaEdad+=dato.edad;
                    cantidad++;
                }
            });
            if(cantidad!=0)
                estadisticas.innerHTML = "La media de edad es "+(sumaEdad/cantidad).toFixed(2)+"<br>"+"La persona de más edad es "+nombreMayorEdad+" y la de menor salario es "+nombreMenorSalario;
            else
                estadisticas.innerHTML = "";
            contenido.appendChild(tabla);
        }
    }
}