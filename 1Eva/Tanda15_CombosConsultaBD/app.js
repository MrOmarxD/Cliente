window.onload = function (){
    cargaSelect("provincia")
    document.getElementById("divmunicipio").style.display = "none";
    document.getElementById("provincia").onchange = cargaSelect;
    document.getElementById("municipio").onchange = mostrarSeleccion;
}

function inicializa_xhr(){
    if(window.XMLHttpRequest){
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function cargaSelect(tipo){
    if(tipo == "provincia"){
        var datos = "tipo=provincia&" + Math.random();
        tipo_accion = "provincia"
    }else{
        document.getElementById("municipio").innerHTML = "";
        var codigo = this.options[this.selectedIndex].value
        if(codigo == 0){
            document.getElementById("divmunicipio").style.display = "none"
            return false
        }else{
            document.getElementById("divmunicipio").style.display = "inline"
            var datos = "tipo=municipio&codigo_provincia="+encodeURIComponent(codigo) + "&nocache=" + Math.random()
            tipo_accion = "municipio"
        }
    }
    peticion_http = inicializa_xhr()
    if(peticion_http){
        peticion_http.onreadystatechange = procesaOptions;
        peticion_http.open("POST", "cargarJSON.php")
        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        peticion_http.send(datos);
    }
}

function procesaOptions(){
    if(peticion_http.readyState == 4 && peticion_http.status == 200){
        var elementos = eval("(" +  peticion_http.responseText + ")")
        document.getElementById(tipo_accion).options[0] = new Option("Elige una opcion", 0)
        var i = 0
        for (var codigo in elementos){
            document.getElementById(tipo_accion).options[i+1] = new Option(elementos[codigo], codigo);
            i++;
        }
    }
}

function mostrarSeleccion(){
    var provincia = document.getElementById("provincia")
    var municipio = document.getElementById("municipio")
    if(parseInt(municipio.value) == 0 || parseInt(provincia.value) == 0){
        mensaje.innerHTML = ""
    }else{
       mensaje.innerHTML = "Has elegido la provincia de <b> " + municipio.options[municipio.selectedIndex].text + 
                                "</b> de la provincia de <b>" + provincia.options[municipio.selectedIndex].text + "</b>";
    }
}