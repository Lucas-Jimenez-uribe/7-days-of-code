var nombre = prompt("¿Cual es tu nombre? ")
var edad = prompt("¿Que edad tines? ")
var lenguaje = prompt("¿Que lenguaje estas aprendiendo? ")
var respuestaUno = "si"
var respuestaDos = "no"





alert(`Hola ${nombre}, tines ${edad} y estas aprendiendo ${lenguaje}`)

var respuesta = prompt(`¿Te gusta estuiar ${lenguaje} ?`) 

if (respuesta == respuestaUno) {
  alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.")
}else{
  alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
}