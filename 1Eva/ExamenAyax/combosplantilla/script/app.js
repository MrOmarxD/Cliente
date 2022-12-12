window.onload = () =>
{
    rellenarComboTipo("opcion1");
    document.getElementById('opcion1').addEventListener('change', rellenarComboProcesador);
    document.getElementById('opcion2').addEventListener('change', rellenarComboDD);
    document.getElementById('opcion3').addEventListener('change', activarBotPrecio);
    document.getElementById('precio').addEventListener('click', mostrarPrecio);
}
function rellenarComboTipo(tipo) {
    let formData = new FormData();
    formData.append('tipo', tipo);
    fetch("combos.php", {
        method: "POST",
        body: formData
    }).then(response => response.text()).then(response => {
        procesaOptions(response, tipo);
    })
    document.getElementById('precio').disabled = true;
}

function rellenarComboProcesador() {
    document.getElementById("opcion2").innerHTML = "";
    let tipo = document.getElementById('opcion1');
    let codigo_anterior = tipo.options[tipo.selectedIndex].value;
    if(codigo_anterior!=0){
        rellenarCombo("opcion2", codigo_anterior);
        document.getElementById('divopcion2').style.display = "block";
    }
    else{
        document.getElementById('divopcion2').style.display = "none";
    }
    document.getElementById('divopcion3').style.display = "none";
    document.getElementById('precio').disabled = true;
}

function rellenarComboDD(){
    document.getElementById("opcion3").innerHTML = "";
    let procesador = document.getElementById('opcion2');
    let codigo_anterior = procesador.options[procesador.selectedIndex].value;
    if(codigo_anterior!=0){
        rellenarCombo("opcion3", codigo_anterior);
        document.getElementById('divopcion3').style.display = "block";
    }
    else{
        document.getElementById('divopcion3').style.display = "none";
    }
    document.getElementById('precio').disabled = true;
}

function rellenarCombo(tipo, codigo_anterior){
    let formData = new FormData();
    formData.append('tipo', tipo);
    formData.append('codigo_anterior', codigo_anterior);
    fetch("combos.php", {
        method: "POST",
        body: formData
    }).then(response => response.text()).then(response => {
        procesaOptions(response, tipo);
    })
}

function procesaOptions(info,tipo){
    let select = document.getElementById(tipo);
    let div = document.createElement('div');
    div.innerHTML = info;
    let arrayOpciones = div.getElementsByTagName('opcion');
    select.options[0] = new Option("- Elige una opción -", 0);
    let i = 1;
    Array.from(arrayOpciones).forEach(opcion => {
        let clave = opcion.getElementsByTagName('codigo')[0].textContent;
        let valor = opcion.getElementsByTagName('nombre')[0].textContent;
        select.options[i] = new Option(valor, clave);
        i++;
    });
    document.getElementById('divinformacion').innerHTML = "";
}

function activarBotPrecio(){
    let dd = document.getElementById('opcion3');
    let codigo_anterior = dd.options[dd.selectedIndex].value;
    if(codigo_anterior!=0)
        document.getElementById('precio').disabled = false;
    else{
        document.getElementById('precio').disabled = true;
    }
    document.getElementById('divinformacion').innerHTML = "";
}

function mostrarPrecio(){
    let dd = document.getElementById('opcion3');
    let codigo_anterior = dd.options[dd.selectedIndex].value;
    let formData = new FormData();
    formData.append('codigo_anterior', codigo_anterior);
    fetch("precio.php", {
        method: "POST",
        body: formData
    }).then(response => response.text()).then(response => {
        document.getElementById('divinformacion').innerHTML = "El precio estimado sería "+response+"€";
    })
}