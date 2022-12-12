window.onload
{
    document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);
    document.getElementsByTagName('tbody')[0].addEventListener('click', borrarProd);
    Array.from(document.getElementsByClassName("card")).forEach(function(element) {element.addEventListener('click', agregarAlCarrito)});
    var carrito = [];
    actualizarCesta();
}

//Añade un prod al la cesta al pulsar el bot añadir
function agregarAlCarrito(e){
    e.preventDefault();
    if(e.target.className == 'u-full-width button-primary button input agregar-carrito'){
        carrito.push(e.target.getAttribute('data-id'));
        localStorage.setItem('carrito', JSON.stringify(carrito));
        escribirDom(e.target.getAttribute('data-id'));
    }
}

//Vaciar el carrito
function vaciarCarrito(){
    carrito = [];
    localStorage.removeItem('carrito');
    document.getElementById('lista-carrito').getElementsByTagName('tbody')[0].innerHTML = "";
}

//Escribimos los objetos en la cesta
function escribirDom(idProd){
    let prod = document.querySelectorAll("[data-id='"+idProd+"']")[0].parentElement;
    let eleTr = document.createElement('tr');
    let eleTdImagen = document.createElement('td');
    let eleImg = document.createElement('img');
    let eleTdNombre = document.createElement('td');
    let eleTdPrecio = document.createElement('td');
    let eleTdCantidad = document.createElement('td');
    let eleTdX = document.createElement('td');
    let eleA = document.createElement('a');
    eleA.innerHTML = 'X';
    eleA.classList = "borrar-curso";
    eleImg.src = prod.parentElement.getElementsByTagName('img')[0].src;
    eleTdNombre.innerHTML = prod.getElementsByTagName('h4')[0].innerHTML;
    eleTdPrecio.innerHTML = prod.getElementsByTagName('p')[1].innerHTML.substr(prod.getElementsByTagName('p')[1].innerHTML.lastIndexOf('$'),3);
    eleTdCantidad.innerHTML = 1;
    eleTdX.appendChild(eleA);
    eleTdImagen.appendChild(eleImg);
    eleTr.appendChild(eleTdImagen);
    eleTr.appendChild(eleTdNombre);
    eleTr.appendChild(eleTdPrecio);
    eleTr.appendChild(eleTdCantidad);
    eleTr.appendChild(eleTdX);
    document.getElementsByTagName('tbody')[0].appendChild(eleTr);
}

//Borrar prod de la cesta al darele a la x
function borrarProd(e){
    e.preventDefault();
    if(e.target.className == "borrar-curso"){
        let $nombre = e.target.parentElement.parentElement.getElementsByTagName('td')[1].innerHTML;
        let arrDivs = document.getElementsByClassName('info-card');
        let id = "";
        for(let i = 0; i<arrDivs.length; i++){
            if(arrDivs[i].getElementsByTagName('h4')[0].innerHTML == $nombre){
                id = arrDivs[i].getElementsByTagName('a')[0].getAttribute('data-id');
            }
        }
        for(let i = 0; i<carrito.length; i++){
            if(id == carrito[i]){
                carrito.splice(i, 1);
                localStorage.setItem('carrito', JSON.stringify(carrito));
                break;
            }
        }
        e.target.parentElement.parentElement.remove();
    }
}


//Al acceder la pag para que recupere la cesta que esta guardada en el localStorage
function actualizarCesta(){
    if(localStorage.getItem('carrito'))
        carrito = JSON.parse(localStorage.getItem('carrito'));
    carrito.forEach(idProd =>escribirDom(idProd));
}