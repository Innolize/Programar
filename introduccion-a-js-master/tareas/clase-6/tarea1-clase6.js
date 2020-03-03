//corregir
/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/




const $botonIngresar = document.querySelector("#boton-ingresar")
const $botonCalcular = document.querySelector("#boton-calcular")
const $botonReset = document.querySelector("#boton-reset")
const $form = document.querySelector("#formulario")
const $errores = document.querySelector("#errores")

$botonIngresar.onclick = function () {
    eliminarErrores();
    const numeroFamiliares = document.querySelector("#familia").value

    const errorNumeroFamiliares = validarNumeros(numeroFamiliares);

    const errores = {
        familia: errorNumeroFamiliares
    }
    const sinErrores = manejarErrores(errores) === 0

    if (sinErrores) {
        ocultarIngresar();
        mostrarCalcular();
        crearGrupoFamiliar(numeroFamiliares)
        return false
    }

    return false
}

$botonCalcular.onclick = function () {
    eliminarErrores();
    const edadesNodo = document.querySelectorAll(".familiares input");

    let edadFamilia = EdadesFamiliaresInputs(edadesNodo)

    erroresCalcular = {}

    edadesNodo.forEach(function (elemento) {
        erroresCalcular[elemento.id] = validarNumeros(elemento.value)
    })

    const sinErrores = manejarErrores(erroresCalcular) === 0

    if (sinErrores) {
        ocultarCalcular();
        document.querySelector("strong").textContent = `El mayor tiene ${calcularMenor(edadFamilia)} años, el menor tiene ${calcularMayor(edadFamilia)} años y el promedio es de ${Math.floor(calcuarPromedio(edadFamilia))} años`
        return false
    }
    return false
}

$botonReset.onclick = function () {
    eliminarErrores();
    ocultarCalcular();
    eliminarResultado()
    eliminarFamiliares();
    mostrarIngresar();
    fixearErrorFamilia();
}





function validarNumeros(numeroAValidar) {
    if (/[,.]+/.test(numeroAValidar)) {
        return "Los números ingresados no pueden contener decimales"
    } if (numeroAValidar <= 0) {
        return "Los números ingresados deben ser mayores a 0"
    } else {
        return ""
    }
}

function calcularMenor(edadFamilia) {
    let numeroMenor = edadFamilia[0]
    edadFamilia.forEach(function (edadFamilia) {
        if (numeroMenor > edadFamilia)
            numeroMenor = edadFamilia
    });
    return numeroMenor
}

function calcularMayor(edadFamilia) {
    let numeroMayor = edadFamilia[0]
    edadFamilia.forEach(function (edadFamilia) {
        if (numeroMayor < edadFamilia)
            numeroMayor = edadFamilia
    });
    return numeroMayor
}

function calcuarPromedio(edadFamilia) {
    let acumulador = 0
    edadFamilia.forEach(function (edadFamilia) {
        acumulador += edadFamilia
    }); numeroPromedio = acumulador / edadFamilia.length
    return numeroPromedio
}

function EdadesFamiliaresInputs(edadesNodo) {
    let acumulador = []
    edadesNodo.forEach(function (edadesNodo) {
        acumulador.push(Number(edadesNodo.value))
    })
    return acumulador
}

function crearGrupoFamiliar(numeroFamiliares) {
    for (let i = 0; i < numeroFamiliares; i++) {
        const crearDiv = document.createElement("div")
        crearDiv.className = "familiares"
        const crearLabel = document.createElement("label");
        const crearInput = document.createElement("input");
        crearLabel.textContent = "Edad"
        crearInput.setAttribute("type", "Number")
        crearInput.id = `input-${i}`
        $form.querySelector("#miembrosFamilia").appendChild(crearDiv)
        crearDiv.appendChild(crearLabel)
        crearDiv.appendChild(crearInput)

    }
}


function manejarErrores(errores) {
    const keys = Object.keys(errores);

    let acumuladorErrores = 0

    keys.forEach(function (key) {
        const error = errores[key];

        if (error) {
            $form[key].className = "error"
            acumuladorErrores++

            const $nuevoError = document.createElement("li")
            $nuevoError.innerText = error;
            $errores.appendChild($nuevoError)

        } else {
            $form[key].className = ""
        }
    });
    return acumuladorErrores
}


function ocultarIngresar() {
    $botonIngresar.classList.add("invisible")
}
function ocultarCalcular() {
    $botonCalcular.classList.add("invisible")
}
function mostrarIngresar() {
    $botonIngresar.classList.remove("invisible")
}
function eliminarErrores() {
    while ($errores.firstChild) {
        $errores.removeChild($errores.firstChild)
    }
}

function eliminarResultado() {
    document.querySelector("#resultado").textContent = ""
}

function eliminarFamiliares() {
    const numeroFamiliares = document.querySelectorAll(".familiares");
    numeroFamiliares.forEach(function (numeroFamiliares) {
        numeroFamiliares.remove();
    });
}

function mostrarCalcular(){
    $botonCalcular.classList.remove("invisible")
}
function fixearErrorFamilia(){
    document.querySelector("#familia").value = ""
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/



