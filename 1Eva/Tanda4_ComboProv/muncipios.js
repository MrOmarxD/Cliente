var provincias = new Array("Araba", "Bizkaia", "Gipuzkoa", "Nafarroa", "Lapurdi", "Zuberoa", "Nafarroa Beherea")

var municipios_1 = new Array("Seleccione Municipio", "Vitoria-Gasteiz", "Amurrio", "El Ciego", "La Guardia");
var municipios_2 = new Array("Seleccione Municipio", "Bilbao", "Barakaldo", "Durango", "Elorrio", "Muzkiz");
var municipios_3 = new Array("Seleccione Municipio", "Donostia-San Sebastián", "Arrasate-Mondragón", "Eibar");
var municipios_4 = new Array("Seleccione Municipio", "Iruña", "Burlada", "Estella-Lizarra", "Tafalla");
var municipios_5 = new Array("Seleccione Municipio", "Baiona", "Bastida", "Hendaya", "Miarritze");
var municipios_6 = new Array("Seleccione Municipio", "Maule", "Barkoxe", "Sohüta");
var municipios_7 = new Array("Seleccione Municipio", "Baigorri", "Garazi", "Oztibarre");

var todosMunicipios = [
    [],
    municipios_1,
    municipios_2,
    municipios_3,
    municipios_4,
    municipios_5,
    municipios_6,
    municipios_7,
];
function rellenarProvincia(){
    document.formulario.provincia.length = provincias.length+1;
    document.formulario.provincia.options[0].value = "-";
    document.formulario.provincia.options[0].text = "Seleccione Municipio";
    for (let i = 1; i <= provincias.length; i++) {
        document.formulario.provincia.options[i].value = i;
        document.formulario.provincia.options[i].text = provincias[i-1];
    }
}
function cambiaMunicipios() {
    let provincia = document.formulario.provincia[document.formulario.provincia.selectedIndex].value;

    if (provincia != 0) {
        let provincia_municipios = todosMunicipios[provincia];
        let num_municipios = provincia_municipios.length; 
        document.formulario.municipio.length = num_municipios;

        for (let i = 0; i < num_municipios; i++) {
            document.formulario.municipio.options[i].value = provincia_municipios[i];
            document.formulario.municipio.options[i].text = provincia_municipios[i];
        }
    } 
    document.getElementById("resultado").textContent = "";
}
function mostrarTxt() {
    let provincia = document.formulario.provincia.value - 1;
    let municipio = document.formulario.municipio.value;
    document.getElementById("resultado").innerHTML = "<p>Ha seleccionado<b>"+municipio+"</b> en <b>"+provincias[provincia]+"</b>";
}