//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.



const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function(){
    const horasArray = document.querySelectorAll(".horas");
    const minutosArray = document.querySelectorAll(".minutos");
    const segundosArray = document.querySelectorAll(".segundos");
    
    let horasLimpias = 0
    let minutosLimpios = 0
    let segundosLimpios = 0
    let i
//segundos
    for(i=0;i<horasArray.length;i++){
        segundosLimpios += Number(segundosArray[i].value);
        if(segundosLimpios >=60){
            segundosLimpios = segundosLimpios - 60;
            minutosLimpios = minutosLimpios + 1 
        }
    }
//minutos
    for(i=0;i<minutosArray.length;i++){
        minutosLimpios += Number(minutosArray[i].value);
        if(minutosLimpios >=60){
            minutosLimpios = minutosLimpios - 60;
            horasLimpias = horasLimpias + 1 
        }
    }
//horas
    for(i=0;i<segundosArray.length;i++){
        horasLimpias += Number(horasArray[i].value);

    }

document.querySelector("strong").textContent = `${horasLimpias} horas, ${minutosLimpios} minutos, ${segundosLimpios} segundos.`

    return false
}