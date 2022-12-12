window.onload
{
    Array.from(document.getElementsByTagName('input')).forEach(function(element) {element.addEventListener('blur', comprobar)});
    document.getElementById('territorio').addEventListener('change', cambiaProvincia);
    document.getElementById('provincia').addEventListener('change', cambiaMunicipio);
    document.getElementById('enviar').addEventListener('click', casillaVericada);
    //document.getElementById('volver').addEventListener('click', cerrarPestania);
    var info = [];
}
function comprobar(){
    let id = this.id;
    let value = this.value;
    if(value == "")
        return;
    let dni = new RegExp(/^\d{8}[A-Z]$/);
    let nombre = new RegExp(/^[a-zA-Z ]{0,50}$/);
    let direccion = new RegExp(/^[C/]?[A-Za-z \d \º]{1,50}$/);
    let email = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    let phone = new RegExp(/^(\+34)?(9|6)(\d{8})$/);
    info[id] = value;

    switch (id) {
        case 'dni':
            if(dni.test(value)){
                if(!validarLetraDni(value)){
                    alert("DNI incorrecto");
                    document.getElementById(id).value = "";
                    info[id] = '';
                }
            }
            else{
                alert("DNI incorrecto");
                document.getElementById(id).value = "";
                info[id] = '';
            }
            break;
        case 'firstname':
            if (!nombre.test(value)){
                alert("Nombre Incorrecto");
                document.getElementById(id).value = "";
                info[id] = '';
            }
            break;
        case 'lastname':
            if (!nombre.test(value)){
                alert("Apellidos Incorrectos");
                document.getElementById(id).value = "";
                info[id] = '';
            }
            break;
        case 'address':
            if (!direccion.test(value)){
                alert("Direccion Incorrecto");
                document.getElementById(id).value = "";
                info[id] = '';
            }
            break;
        case 'email':
            if (!email.test(value)){
                alert("Email Incorrecto");
                document.getElementById(id).value = "";
                info[id] = '';
            }
            break;
        case 'phone':
            if (!phone.test(value)){
                alert("Telefono Incorrecto");
                document.getElementById(id).value = "";
                info[id] = '';
            }
            break;
        case 'birthday':
            console.log(value);
            let anio = parseInt(value.substring(0,value.indexOf("-")));
            let mes = parseInt(value.substring(value.indexOf("-")+1, value.lastIndexOf("-")));
            let dia = parseInt(value.substring(value.lastIndexOf("-")+1));
            let hoy = new Date();
            let edad = parseInt(hoy.getFullYear()) - anio;
            let m = parseInt(hoy.getMonth()+1) - mes;
            if (m < 0 || (m === 0 && hoy.getDate() < dia)) {
                edad--;
            }
            alert("Tiene: "+edad+" años");
            break;
    }
    console.log(info);
    if(info.length >= document.getElementsByTagName('input').length+2){
        document.getElementById('enviar').disabled = false;
    }
    else
        document.getElementById('enviar').disabled = true;
    info.forEach(el => console.log(el));
}
function validarLetraDni(dni){
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let eleNumDni = dni.substring(0, dni.length-1);
    let eleLetraDni = dni.substr(-1);
    let letraReal = letras[eleNumDni%23];
    if(letraReal==eleLetraDni)
        return true;
    else
        return false;
}
let territorios = ['Euskadi', 'Nafarroa', 'Iparralde'];
let todasProvincias = [
    [],
    ['Araba', 'Bizkaia', 'Gipuzkoa'],
    ['Navarra'],
    ['Lapurdi', 'Behe Nafarroa', 'Zuberoa'],
];
let municipios = [];
municipios['Araba'] = ["Gasteiz", "Laguardia", "Salvatierra"]; 
municipios['Bizkaia'] = ["Bilbo", "Barakaldo", "Durango"]; 
municipios['Gipuzkoa'] = ["Donosti", "Arrasate","Bergara"]; 
municipios['Navarra'] = ["Iruña", "Lizarra", "Ujue"];
municipios['Lapurdi'] = ["Baiona", "Biarritz", "Hendaya"];
municipios['Behe Nafarroa'] = ["Bidarray","St-Palais"];
municipios['Zuberoa'] = ["Maule","Etxarri"];
document.getElementById('territorio').length = territorios.length+1;
document.getElementById('territorio').options[0].value = "-";
document.getElementById('territorio').options[0].text = "Seleccione territorio";
for (let i = 1; i <= territorios.length; i++) {
    document.getElementById('territorio').options[i].value = i;
    document.getElementById('territorio').options[i].text = territorios[i-1];
}
function cambiaProvincia(){
    let territorio = document.getElementById('territorio')[document.getElementById('territorio').options.selectedIndex].value;
    if (territorio != 0) {
        let territorioProvincia = todasProvincias[territorio];
        let num_provincias = territorioProvincia.length+1; 
        document.getElementById('provincia').length = num_provincias;
        document.getElementById('provincia').options[0].value = "-";
        document.getElementById('provincia').options[0].text = "Seleccione provincia";
        for (let i = 1; i < num_provincias; i++) {
            document.getElementById('provincia').options[i].value = territorioProvincia[i-1];
            document.getElementById('provincia').options[i].text = territorioProvincia[i-1];
        }
    }
    document.getElementById('municipio').length = 0;
}
function cambiaMunicipio(){
    let provincia = document.getElementById('provincia')[document.getElementById('provincia').options.selectedIndex].value;
    if (provincia != 0) {
        let provinciaMunicipio = municipios[provincia];
        let num_municipios = provinciaMunicipio.length+1; 
        document.getElementById('municipio').length = num_municipios;
        document.getElementById('municipio').options[0].value = "-";
        document.getElementById('municipio').options[0].text = "Seleccione municipio";
        for (let i = 1; i < num_municipios; i++) {
            document.getElementById('municipio').options[i].value = provinciaMunicipio[i-1];
            document.getElementById('municipio').options[i].text = provinciaMunicipio[i-1];
        }
    }
}

function casillaVericada(){
    let eleInputVerificar = document.getElementById('politicas');
    if(eleInputVerificar.check == true){
        localStorage.setItem('misTweets', JSON.stringify(info));
        window.location.href = "thankyou.html";
    }
    else
        alert("Debe de acceptar los terminos y Condiciones.");
}
function borrarDelArray(){
    info.forEach(el => console.log(info[ele]));
}
function cerrarPestania(){
    window.open = "index.html";
    window.close();
}