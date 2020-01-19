// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.




//TAREA 1
/*
const nombreUsuario = prompt("Como te llamas?")
const miNombre = Román
const hnoNombre = Franco
if (nombreUsuario.toLowerCase === miNombre){
    console.log(`Hola, Tocayo! Yo también me llamo ${nombreUsuario}`)
}else if(nombreUsuario.toLowerCase === hnoNombre){
    console.log(`Hola ${nombreUsuario}, te llamas igual que mi hermano`)
} else {
    console.log(`Hola ${nombreUsuario}`)
}

*/

// TAREA 2
/*
const edadUsuario = prompt(`Que edad tenes?`)
const miEdad = "27"

if (edadUsuario < miEdad){
    console.log(`Tenes menos edad que yo`);
} else if (edadUsuario < miEdad){
    console.log(`Tenes mas edad que yo`);
} else {
    console.log(`Tenes la misma edad que yo`);
}
*/

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const tieneDocumento = prompt(`Tenes documentos?`);
let edad

if (tieneDocumento === "si"){
    let edad = Number(prompt(`Cuantos años tenes?`))
}
    if (edad >= "18"){
        console.log(`Bienvenido al bar`)
}   else (edad <= 18)
        console.log(`No podes entrar al bar`)
if (tieneDocumento = "no"){
    console.log(`No podes entrar al bar`)
}else
    console.log(`No entendimos tu respuesta`)