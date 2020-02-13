//corregir
/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar
 el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual,
 salario anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $botonSiguiente = document.querySelector("#boton-siguiente")
const $botonCalcular = document.querySelector("#boton-calcular")
const $botonReset = document.querySelector("#boton-reset")
const $form = document.querySelector("#formulario")
const $salarioTrabajadores = document.querySelector("#salario-trabajadores")

$botonSiguiente.onclick = function () {
    numeroDeTrabajadores = document.querySelector("#trabajadores").value

    const errorNumeroDeTrabajadores = validarNumeros(numeroDeTrabajadores);

    const errores = {
        trabajadores: errorNumeroDeTrabajadores
    }

    const sinErrores = manejarErrores(errores) === 0

    if (sinErrores) {
        $botonCalcular.className = ""
        crearTrabajadores(numeroDeTrabajadores)
    }
    return false
}



$botonCalcular.onclick = function () {
    const salariosAnualesArray = document.querySelectorAll("#salario-trabajadores input")
    let salariosAnuales = []

    salariosAnualesArray.forEach(function (salariosAnualesArray) {
        salariosAnuales.push(Number(salariosAnualesArray.value))

    });

    let errorSalariosAnuales = []
    salariosAnuales.forEach(function (elemento) {
        errorSalariosAnuales.push(validarNumeros(elemento))
    })
    const erroresCalcular = {
        inputSalario: errorSalariosAnuales
    };
    
    const sinErrores = manejarErrores(erroresCalcular)
    console.log(resultado)

    //si activo esto se reinicia a pagina y siempre toma un error
    //  if (sinErrores) {
    //      $botonCalcular.className = "oculto"
    //      document.querySelector("strong").textContent = `El salario Anual mas alto es: ${salarioAnualMayorCalculo(salariosAnuales)}, el mas bajo es: ${calcularSalarioMenor(salariosAnuales)}, el promedio es: ${promedioAnual(salariosAnuales)} y mensual del promedio es de: ${Math.floor(promedioAnual(salariosAnuales) / 12)}`
    //  }

    return false
}





$botonReset.onclick = function () {
    const $trabajadores = document.querySelectorAll(".inputSalarioDiv")
    $trabajadores.forEach(function ($trabajadores) {
        $trabajadores.remove();
    });
    document.querySelector("strong").textContent = " "
    return false
}

function salarioAnualMayorCalculo(salariosAnuales) {
    let salarioMayor = salariosAnuales[0]
    salariosAnuales.forEach(function (salariosAnuales) {
        if (salarioMayor < salariosAnuales) {
            salarioMayor = salariosAnuales
        }
    }); return salarioMayor
}

function promedioAnual(salariosAnuales) {
    let acumulador = 0
    salariosAnuales.forEach(function (salariosAnuales) {
        acumulador += salariosAnuales
    }); return acumulador / salariosAnuales.length
}

function calcularSalarioMenor(salariosAnuales) {
    let salarioMenor = salariosAnuales[0]
    salariosAnuales.forEach(function (salariosAnuales, ) {
        if (salarioMenor > salariosAnuales) {
            salarioMenor = salariosAnuales
        }
    }); return salarioMenor
}

function crearTrabajadores(numeroDeTrabajadores) {
    for (let i = 0; i < numeroDeTrabajadores; i++) {
        const crearLabel = document.createElement("label")
        const crearInput = document.createElement("input")
        const crearDiv = document.createElement("div")
        crearDiv.className = "inputSalarioDiv"
        crearLabel.textContent = "Salario anual:"
        crearInput.setAttribute = "type", "number"
        crearInput.name = "inputSalario"
        $salarioTrabajadores.appendChild(crearDiv)
        crearDiv.appendChild(crearLabel)
        crearDiv.appendChild(crearInput)
    }
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

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector("#errores");
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