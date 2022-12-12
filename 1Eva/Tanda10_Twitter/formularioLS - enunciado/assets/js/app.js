window.onload
{
    document.getElementById("botAgregar").addEventListener("click", agregar);
    document.getElementById('lista-tweets').addEventListener('click', borrarTw);
    var historial = [];
    //Recuperamos si tiene algo almacenado el loscalStorage en el array historial
    if(localStorage.getItem('misTweets'))
        historial = JSON.parse(localStorage.getItem('misTweets'));
    reescribirListaTw();
}
function agregar(){
    if(document.getElementById('tweet').value=="")
        return;
    //Añadimos el tweet que esta en la caja de texto
    historial.push(document.getElementById('tweet').value);
    //Guardamos el contenido actualizadio en el localSrorage
    localStorage.setItem('misTweets', JSON.stringify(historial));
    escribirDom(document.getElementById('tweet').value);
}
function borrarTw(e){
    e.preventDefault();
    if(e.target.className === 'borrar-tweet')
        e.target.parentElement.remove();
    for(let i = 0; i<historial.length; i++){
        if(e.target.parentElement.innerText.substring(0, e.target.parentElement.innerText.length -1) == historial[i]){
            historial.splice(i, 1);
            localStorage.setItem('misTweets', JSON.stringify(historial));
            break;
        }
    }
}
function reescribirListaTw(){
    historial.forEach(tw => escribirDom(tw));
}
function escribirDom(tw){
    let x = document.createElement('a');
    x.classList = 'borrar-tweet';
    x.innerText = 'X';
    let eleLi = document.createElement('li');
    eleLi.innerText = tw;
    eleLi.appendChild(x);
    document.getElementById('lista-tweets').appendChild(eleLi);
}