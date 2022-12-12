window.onload
{
    document.getElementById("asunto").addEventListener("change",modificarCurso);
}
function modificarCurso(){
    if(document.getElementById("asunto").value=="curso"){
        document.getElementById("curso").style.display="block";
        document.getElementById("cursoLabel").style.display="block";
    }else{
        document.getElementById("curso").style.display="none";
        document.getElementById("cursoLabel").style.display="none";
    }
}