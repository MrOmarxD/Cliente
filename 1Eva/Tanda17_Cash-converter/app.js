document.getElementById('botconvertir').addEventListener('click', fetchmonedas);
const monedas = {
    AUD: "Dólar Australiano",
    CAD: "Dólar Canadiense",
    EUR: "Euro",
    GBP: "libra Esterlina",
    USD: "Dólar Estaudinense",
};
document.getElementById('moneda').innerHTML = getOptions(monedas);
document.getElementById('monedaCambio').innerHTML = getOptions(monedas);
function getOptions(data) {
    return Object.entries(data)
      .map(([pais, moneda]) => `<option value="${pais}">${pais} | ${moneda}</option>`)
      .join("");
}
function fetchmonedas(){
    fetch("https://v6.exchangerate-api.com/v6/28dfe97b888fa3330126367a/latest/" + document.getElementById('moneda').value)
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            mostrarResultado(data, document.getElementById('moneda').value, document.getElementById('monedaCambio').value, document.getElementById('cantidad').value);
        })
        .catch(function(error) {
            console.log(error);
        });
}
function mostrarResultado(data, moneda, monedaCambio, cantidad){
    let conversion = cantidad * data.conversion_rates[monedaCambio];
    document.getElementById('resultado').innerText = cantidad+moneda+" = "+conversion+monedaCambio;
}