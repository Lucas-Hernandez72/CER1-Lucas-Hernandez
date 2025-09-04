

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
    segundos.textContent = minutos_restantes;
}
actualizar_hora();
setInterval(actualizar_hora, mili_segundos);
