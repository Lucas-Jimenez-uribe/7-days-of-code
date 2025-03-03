// Pregunta inicial para elegir entre Front-End o Back-End
const pregunta = prompt("Front end : 1 , back end : 2 ");
let tecnologia; // Variable para almacenar la tecnología elegida

// Condicional para determinar qué tecnología preguntar según la elección
if (pregunta == 1) {
  tecnologia = prompt("¿Qué te gustaría aprender? React o Vue"); // Pregunta para Front-End
} else if (pregunta == 2) {
  tecnologia = prompt("¿Qué te gustaría aprender? C# o Java"); // Pregunta para Back-End
}

// Pregunta sobre la preferencia de especialización o Fullstack
const preguntaDos = prompt("¿Prefieres especializarte o convertirte en Fullstack?");

// Validación de la tecnología ingresada y mensaje de confirmación
if (tecnologia.toLowerCase() == "react" || tecnologia.toLowerCase() == "vue" || tecnologia.toLowerCase() == "c#" || tecnologia.toLowerCase() == "java") {
  alert(`Elegiste ${tecnologia} y tu camino será: ${preguntaDos}`); // Mensaje con la tecnología y camino elegido
} else {
  alert("Opción no válida"); // Mensaje si la tecnología no es válida
}

let continuar = "ok"; // Variable para controlar el bucle
let tecnologias = []; // Lista para almacenar las tecnologías adicionales

// Bucle para preguntar tecnologías adicionales mientras el usuario escriba "ok"
while (continuar.toLowerCase() === "ok") {
  let nuevaTecnologia = prompt("¿Qué otra tecnología te gustaría aprender?").trim(); // Pregunta por una nueva tecnología, con metodo trim para verificar si hay espacios en blanco
  
  if (nuevaTecnologia === "") { // condicional que se asegura de que no haya espacios en blanco 
    alert("El campo está vacío, por favor ingrese una tecnología.");
  }else{
    tecnologias.push(nuevaTecnologia); // Agregar la tecnología a la lista
  }

  // Pregunta si desea continuar agregando tecnologías
  continuar = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' para continuar o cualquier otra cosa para salir.");

  
}

// Muestra todas las tecnologías ingresadas separadas por comas
alert("Te gustaría aprender estas tecnologías: " + tecnologias.join(", "));
