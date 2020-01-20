//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.



const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function(){
    const horasArray = document.getElementsByClassName("horas");
    const minutos = document.getElementsByClassName("minutos");
    const segundos = document.getElementsByClassName("segundos");
    
    let horasLimpias = 0
    let minutosCalculados = 0
    let segundosCalculados = 0
    let i
    for(i=0;i<=horasArray.length;i++){
        horasLimpias += Number(horasLimpias[i]).value;

    }
    console.log(horasCalculadas)
    return false
}