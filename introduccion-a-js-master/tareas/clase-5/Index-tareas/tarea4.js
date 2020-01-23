//corregir
//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

arrayNumeros = document.querySelectorAll("li")

function promediar() {
    let sumaDeNumeros = 0
    for (let i = 0; i < arrayNumeros.length; i++) {
        sumaDeNumeros += Number(arrayNumeros[i].textContent)
    }
    return sumaDeNumeros / arrayNumeros.length
}




function numeroMasRepetido() {
    let masFrecuente = 1;
    let vecesRepetido = 0;
    let numeromasRepetido = 0;

    for (i = 0; i < arrayNumeros.length; i++) {
        for (let j = 0; j < arrayNumeros.length; j++) {
            if (arrayNumeros[i].textContent == arrayNumeros[j].textContent) {
                vecesRepetido++;
            }
            if (masFrecuente < vecesRepetido) {
                masFrecuente = vecesRepetido;
                numeromasRepetido = arrayNumeros[i].textContent
            }
        }
        vecesRepetido = 0;
    }
    return numeromasRepetido
}





function menor() {
    let numeroMenor = arrayNumeros[0].textContent
    for (i = 0; i < arrayNumeros.length; i++) {
        if (numeroMenor > arrayNumeros[i].textContent) {
            numeroMenor = arrayNumeros[i].textContent
        }
    } return numeroMenor
}

function mayor() {
    let numeroMayor = 0
    for (i = 0; i < arrayNumeros.length; i++) {
        if (numeroMayor < arrayNumeros[i].textContent) {
            numeroMayor = arrayNumeros[i].textContent
        }
    } return numeroMayor
}


document.querySelector("#promedio").textContent = `El promedio es ${promediar()}`
document.querySelector("#numero-pequenio").textContent = `El numero mas pequeño es ${menor()}`
document.querySelector("#numero-grande").textContent = `El numero mas alto es ${mayor()}`
document.querySelector("#numero-frecuente").textContent = `El numero mas frecuente es ${numeroMasRepetido()}`