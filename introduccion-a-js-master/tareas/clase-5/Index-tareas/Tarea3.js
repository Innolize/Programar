//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.



const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function () {
    const horasArray = document.querySelectorAll(".horas");
    const minutosArray = document.querySelectorAll(".minutos");
    const segundosArray = document.querySelectorAll(".segundos");

    let horas = 0
    let minutos = 0
    let segundos = 0

    //segundos
    for (i = 0; i < horasArray.length; i++) {
        segundos += Number(segundosArray[i].value);
    }
    //minutos
    for (i = 0; i < minutosArray.length; i++) {
        minutos += Number(minutosArray[i].value);
    }

    //horas
    for (i = 0; i < segundosArray.length; i++) {
        horas += Number(horasArray[i].value);

    }

    document.querySelector("strong").textContent = convertidorDeTiempo(segundos, minutos, horas)

    return false
}

function convertidorDeTiempo(segundos, minutos, horas) {
    valorSegundos = segundos % 60
    valorMinutos = Math.floor(segundos / 60) + minutos % 60
    valorHoras = Math.floor(minutos / 60) + horas % 24
    return(valorHoras + " horas, " + valorMinutos + " minutos, " + valorSegundos + "segundos.")
}