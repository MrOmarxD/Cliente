window.onload
{
    cargarProvincias();
    document.getElementById("provincia").onchange = cargaMunicipios;
    document.getElementById("municipio").onchange = mostrarMensaje;
    var municipiosArray = [];
    var provinciasArray = [];
}
function inicializa_xhr() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}
function cargarProvincias() {
    // Obtener la instancia del objeto XMLHttpRequest
    peticion = inicializa_xhr();

    if (peticion) {
        // Preparar la funcion de respuesta 
        peticion.onreadystatechange = mostrarProvincias;
        // Realizar peticion HTTP
        peticion.open("GET", "php/cargaProvinciasJSON.php", true);
        peticion.send(null);
    }
    //mostrarProvincias;
}
function mostrarProvincias() {
    if ((peticion.readyState === 4) && (this.status === 200 )){
        let eleSelecProv = document.getElementById("provincia");
        let provincias = eval('(' + peticion.responseText + ')');
        provinciasArray = provincias;
        eleSelecProv.options[0] = new Option("- selecciona una provincia -");
        let i = 1;
        for (let codigo in provincias) {
            eleSelecProv.options[i] = new Option(provincias[codigo], codigo);
            i++;
        }
    }
}
function cargaMunicipios() {
    var eleSelecProv = document.getElementById("provincia");
    var provincia = eleSelecProv.options[eleSelecProv.selectedIndex].value;
    document.getElementById("mensaje").innerHTML="";
    if (!isNaN(provincia)) {
        peticion = inicializa_xhr();
        if (peticion) {
            peticion.onreadystatechange = muestraMunicipios;
            peticion.open("POST", "php/cargaMunicipiosJSON.php", true);
            peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            peticion.send("provincia=" + provincia);
        }
    }
}
function muestraMunicipios() {
    if ((peticion.readyState === 4) && (this.status === 200 )){
        let eleSelecMun = document.getElementById("municipio");
        let municipios = eval('(' + peticion.responseText + ')');
        municipiosArray = municipios;

        eleSelecMun.options.length = 0;
        eleSelecMun.options[0] = new Option("- selecciona un municipio -");
        let i = 0;
        for (let codigo in municipios) {
            eleSelecMun.options[i] = new Option(municipios[codigo], codigo);
            i++;
        }
    }
}

function mostrarMensaje() {
    document.getElementById("mensaje").innerHTML = "Has elegido la provincia de <b> " + provinciasArray[provincia.value] + "</b> y el muncipio de <b>" + municipiosArray[municipio.value] + "</b>";
}