/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar
 el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual,
 salario anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $botonSiguiente = document.querySelector("#boton-siguiente")



$botonSiguiente.onclick = function(){
    numeroDeTrabajadores = document.querySelector("#trabajadores").value
    for(let i=0;i<numeroDeTrabajadores;i++){
        const crearLabel = document.createElement("label")
        const crearInput = document.createElement("input")
        const crearDiv = document.createElement("div")
        crearLabel.textContent = "Salario anual:"
        crearInput.setAttribute = "type","number"
        document.querySelector("body").appendChild(crearDiv)
        document.querySelector("div").appendChild(crearLabel)
        document.querySelector("div").appendChild(crearInput)
    }
    document.querySelector("div").className = "salarios-anuales-class"
}

const $botonCalcular = document.querySelector("#boton-calcular")

$botonCalcular.onclick = function(){
    $salariosAnualesArray = document.querySelectorAll(".salarios-anuales-class input")
    salariosAnuales = []
        for(i=0;i<$salariosAnualesArray.length;i++){
        salariosAnuales.push(Number($salariosAnualesArray[i].value))
        }

        let salarioMayor = salariosAnuales[0]
        for(i=0;i<salariosAnuales.length;i++){
            if(salarioMayor<salariosAnuales[i])
                salarioMayor=salariosAnuales[i]
        }

        let salarioMenor = salariosAnuales[0]
        for(i=0;i<salariosAnuales.length;i++){
            if(salarioMenor>salariosAnuales[i])
                salarioMenor=salariosAnuales[i]
        }

        let promedio = 0
        for(i=0;i<salariosAnuales.length;i++){
            promedio +=salariosAnuales[i]
        } promedio = promedio / salariosAnuales.length
            promedioMensual = promedio / 12
        document.querySelector("strong").textContent = `El salario Anual mas alto es: ${salarioMayor}, el mas bajo es: ${salarioMenor}, el promedio es: ${promedio} y mensual del promedio es de: ${promedioMensual.toFixed(1)}` }


const $botonReset = document.querySelector("#boton-reset")

$botonReset.onclick = function(){
    const $trabajadores = document.querySelectorAll(".salarios-anuales-class")
    for(let i=0;i<$trabajadores.length;i++){
        $trabajadores[i].remove();
}
    document.querySelector("strong").textContent= " "
}


