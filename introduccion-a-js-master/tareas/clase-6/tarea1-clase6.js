//corregir
/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/




const $boton = document.querySelector("#boton-ingresar")
const $calcular = document.querySelector("#boton-calcular")
const $reset = document.querySelector("#boton-reset")


$calcular.onclick = function () {
    const edadesNodo = document.querySelectorAll(".familiares input");
    let edadFamilia = []
    for (let i = 0; i < edadesNodo.length; i++) {
        edadFamilia.push(Number(edadesNodo[i].value))
    }
    console.log(edadFamilia)

    let numeroMenor = edadFamilia[0]
    for (let i = 0; i < edadFamilia.length; i++) {
        if (numeroMenor > edadFamilia[i])
            numeroMenor = edadFamilia[i]
    } console.log(numeroMenor)

    let numeroMayor = 0
    for (let i = 0; i < edadFamilia.length; i++) {
        if (numeroMayor < edadFamilia[i])
            numeroMayor = edadFamilia[i]
    } console.log(numeroMayor)

    let acumulador = 0
    {
        for (let i = 0; i < edadFamilia.length; i++)
            acumulador += edadFamilia[i]

    } numeroPromedio = acumulador / edadFamilia.length

    document.querySelector("strong").textContent = `La persona con mayor edad tiene ${numeroMayor}, la de menor edad tiene ${numeroMenor} y el promedio es de ${numeroPromedio} años`
}


$boton.onclick = function () {
    const numeroFamiliares = document.querySelector("#grupo-familiar").value
    let i
    for (i = 0; i < numeroFamiliares; i++) {
        const crearDiv = document.createElement("div")
        crearDiv.className = "familiares"
        const crearLabel = document.createElement("label");
        const crearInput = document.createElement("input");
        crearLabel.textContent = "Edad"
        crearInput.setAttribute("type", "Number")
        document.querySelector("body").appendChild(crearDiv)
        document.querySelector("div").appendChild(crearLabel)
        document.querySelector("div").appendChild(crearInput)

    }
    return false
}


$reset.onclick = function () {
    const $numeroFamiliares = document.querySelectorAll(".familiares");
    for (let i = 0; i < $numeroFamiliares.length; i++) {
        $numeroFamiliares[i].remove();
    }
    document.querySelector("strong").textContent = " "

}





































/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/




