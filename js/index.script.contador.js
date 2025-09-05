

const Fecha_Llegada = new Date('10/19/2025 0:01 AM');

const dias = document.querySelector('span#dias'); 
const horas = document.querySelector('span#horas'); 
const minutos = document.querySelector('span#minutos');
const segundos = document.querySelector('span#segundos'); 
// querySelector busco el elemento que consida con la busqueda tipo css

const mili_segundos = 1000;
const mili_minutos = mili_segundos*60;
const mili_horas = mili_minutos*60;
const mili_dias = mili_horas*24;
 
function actualizar_hora(){

    const ahora = new Date();
    const duracion = Fecha_Llegada - ahora;
    const dias_restantes = Math.floor(duracion/mili_dias)
    const horas_restantes = Math.floor((duracion%mili_dias)/mili_horas)
    const minutos_restantes = Math.floor((duracion%mili_horas)/mili_minutos)
    const segundos_restantes = Math.floor((duracion%mili_minutos)/mili_segundos)

    dias.textContent = dias_restantes;
    horas.textContent = horas_restantes;
    minutos.textContent = minutos_restantes;
    segundos.textContent = segundos_restantes;
}
actualizar_hora();
setInterval(actualizar_hora, 1000);
function fecha(){
    const ahora = new Date();
    const dia = ahora.getDate().toString().padStart(2, '0');
    const mes = (ahora.getMonth() + 1).toString().padStart(2, '0');
    const año = ahora.getFullYear();
    
    const fecha = `${dia}/${mes}/${año}`;
    return fecha
}


document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario
    const ahora = fecha()
    const name = document.getElementById('name').value;
    const commentText = document.getElementById('comment').value;
    const nameF = name+' '+ahora

    if (name && commentText) {
        if(commentText.length <501){
            const commentsList = document.getElementById('comments-list');
    
            const newComment = document.createElement('li');
            newComment.innerHTML = `<strong>${nameF}:</strong> ${commentText}`; // Muestra el nombre y comentario
    
            commentsList.appendChild(newComment);
    
            // Limpiar el formulario
            document.getElementById('comment-form').reset();
        }else{
            
        }
    }
});