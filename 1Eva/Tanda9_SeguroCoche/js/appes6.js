window.onload
{
    document.getElementById('cotizar').addEventListener("click", comprobar);
    var errores = [];
    var precio = 2000;
}
function comprobar(){
    let eleMarca = document.getElementById('marca');
    let marcaSeleccionada = eleMarca[eleMarca.selectedIndex].value;
    let eleAnio = document.getElementById('anio');
    let anioSeleccionado = eleAnio[eleAnio.selectedIndex].value;
    if(marcaSeleccionada == "")
        errores.push("Debes de seleccionar una marca");
    if(anioSeleccionado == "")
        errores.push("Debes de seleccionar una cantidad de años");
    if(errores.length!=0)
        mostrarErrores();
    else
        calcular(marcaSeleccionada, anioSeleccionado);
}
function calcular(marca, anio){
    let eleTipo = document.getElementsByName('tipo');
    for(let i = 0; i<eleTipo.length; i++){
        if(eleTipo[i].checked == true)
            tipoSeleccionado = eleTipo[i].value;
    }
    switch (marca){
        case "1":
            precio = precio + (precio*0.15);
            break;
        case "2":
            precio = precio + (precio*0.05);
            break;
        case "3":
            precio = precio + (precio*0.35);
            break;
    }
    if(tipoSeleccionado == "basico")
        precio = precio + (precio*0.3);
    else
        precio = precio + (precio*0.5);
    precio = precio - (precio*(3*anio)/100);
    mostrarResultado(precio);
}
function mostrarErrores(){
    let eleImgCargando = document.getElementById("cargando").getElementsByTagName('img')[0];
    eleImgCargando.style.display = "block";
    let eleP = document.createElement("p");
    let eleDivResultado = document.getElementById("resultado");
    setTimeout(function() {eleImgCargando.style.display = "none"; errores.forEach(error => eleP.innerHTML = eleP.textContent+"<br>"+error);}, 3000);
    eleDivResultado.appendChild(eleP);
}
function mostrarResultado(resultado){
    let eleImgCargando = document.getElementById("cargando").getElementsByTagName('img')[0];
    eleImgCargando.style.display = "block";
    let eleDivResultado = document.getElementById("resultado");
    let eleP = document.createElement("p");
    setTimeout(function() {eleImgCargando.style.display = "none"; eleP.textContent = "Debes de pagar: "+resultado+"€";}, 3000);
    eleDivResultado.appendChild(eleP);
}