// Objeto que contiene categorías como claves y listas vacías como valores
var listaCompras = {
  frutas: [],
  lacteos: [],
  congelados: [],
  dulces: [],
  otros: []
};

// Pregunta inicial para saber si el usuario quiere agregar productos
var preguntaInical = prompt("¿Quieres agregar un producto a la lista de compras? si/no").trim().toLowerCase();

// Validación para asegurarse de que el usuario responda solo "si" o "no"
if (preguntaInical !== "si" && preguntaInical !== "no") {
  alert("Por favor, responde con 'si' o 'no'.");
  preguntaInical = prompt("¿Quieres agregar un producto a la lista de compras? si/no").trim().toLowerCase();
}

// Bucle para seguir pidiendo productos mientras la respuesta sea "si"
while (preguntaInical === "si") {
  
  // Pregunta por el producto y su categoría
  var producto = prompt("¿Qué producto quieres agregar a la lista de compras?").trim().toLowerCase();
  var categoria = prompt("¿A qué categoría pertenece el producto?").trim().toLowerCase();

  // Validación para evitar campos vacíos
  if (producto === "" || categoria === "") {
    alert("Por favor, llena todos los campos antes de continuar.");
    continue; // Reinicia el bucle sin agregar el producto
  }

  // Clasificación del producto según la categoría ingresada
  if (categoria.toLowerCase() === "frutas") {
    listaCompras.frutas.push(producto);
  } else if (categoria.toLowerCase() === "lacteos") {
    listaCompras.lacteos.push(producto);
  } else if (categoria.toLowerCase() === "congelados") {
    listaCompras.congelados.push(producto);
  } else if (categoria.toLowerCase() === "dulces") {
    listaCompras.dulces.push(producto);
  } else {
    listaCompras.otros.push(producto); // Si la categoría no es válida, va a la categoría "otros"
  }
  
  // Pregunta si el usuario quiere agregar otro producto
  preguntaInical = prompt("¿Quieres agregar otro producto a la lista de compras? si/no").trim().toLowerCase();

  // Si la respuesta es "no", se rompe el bucle
  if (preguntaInical === "no") {
    break;
  }
}

// Mensaje final con la lista de compras organizada por categorías
let mensaje = "Lista de compras:\n";

// Recorre las categorías del objeto listaCompras
for (let categoria in listaCompras) {
  if (listaCompras[categoria].length > 0) {
    // Solo muestra categorías con productos
    mensaje += `${categoria}: ${listaCompras[categoria].join(", ")}\n`;
  }
}

// Muestra el mensaje con la lista final
alert(mensaje);
