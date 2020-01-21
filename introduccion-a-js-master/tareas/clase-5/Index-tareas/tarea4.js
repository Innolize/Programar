//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

arrayNumeros = document.querySelectorAll("li")

let i
let sumaDeNumeros = 0
for(i=0;i <arrayNumeros.length; i++){
    sumaDeNumeros += Number(arrayNumeros[i].textContent)
}
let promedio = sumaDeNumeros / arrayNumeros.length



    let cero = 0
    let uno = 0
    let dos = 0
    let tres = 0
    let cuatro = 0
    let cinco = 0
    let seis = 0
    let siete = 0
    let ocho = 0
    let nueve = 0
    
for(i=0;i<arrayNumeros.length;i++){
        if(arrayNumeros[i].textContent == 0){
        cero = cero + 1
        }if(arrayNumeros[i].textContent == 1){
        uno = uno + 1
        }if(arrayNumeros[i].textContent == 2){
        dos = dos + 1
        }if(arrayNumeros[i].textContent == 3){
        tres = tres + 1
        }if(arrayNumeros[i].textContent == 4){
        cuatro = cuatro + 1
        }if(arrayNumeros[i].textContent == 5){
        cinco = cinco + 1
        }if(arrayNumeros[i].textContent == 6){
        seis = seis + 1
        }if(arrayNumeros[i].textContent == 7){
        siete = siete + 1
        }if(arrayNumeros[i].textContent == 8){
        ocho = ocho + 1
        }if(arrayNumeros[i].textContent == 9){
        nueve = nueve + 1
        }
      
}numeroRepetido = Math.max(uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve)  





    let numeroMenor = Number
    for(i=0; i<arrayNumeros.length;i++){
        if(numeroMenor>arrayNumeros[i].textContent){
            numeroMenor = arrayNumeros[i].textContent
        }
}



    let numeroMayor = 0
    for(i=0; i<arrayNumeros.length;i++){
        if(numeroMayor<arrayNumeros[i].textContent){
            numeroMayor = arrayNumeros[i].textContent
        }
    }


document.querySelector("#promedio").textContent = `El promedio es ${promedio}`
document.querySelector("#numero-pequenio").textContent = `El numero mas pequeño es ${numeroMenor}`
document.querySelector("#numero-grande").textContent = `El numero mas alto es ${numeroMayor}`
document.querySelector("#numero-frecuente").textContent = `El numero mas frecuente es ${numeroRepetido}`