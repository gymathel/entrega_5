// 1. Matriz/Array inicial de vehículos
let inventarioAutos = [
  { modelo: "Equinox", cantidad: 15, colores: ["blanco", "negro", "azul"] },
  { modelo: "Corolla", cantidad: 22, colores: ["blanco", "negro", "azul"] },
  { modelo: "Silverado", cantidad: 12, colores: ["blanco", "negro", "azul"] },
  { modelo: "Trailblazer", cantidad: 22, colores: ["blanco", "negro", "azul"] }
];

// Pedir nombre del administrador
let nombreAdmin = prompt("Por favor, ingresa tu nombre de administrador:");
while (!nombreAdmin || nombreAdmin.trim() === "") {
  nombreAdmin = prompt("Nombre no válido. Por favor, ingresa tu nombre de administrador:");
}
console.log(`=== BIENVENIDO/A AL SISTEMA, ${nombreAdmin.toUpperCase()} ===\n`);

// Función auxiliar para obtener array de nombres en minúsculas
function obtenerNombresMinusculas(arrayAutos) {
  let nombres = [];
  for (const auto of arrayAutos) {
    nombres.push(auto.modelo.toLowerCase());
  }
  return nombres;
}

// 3. Iteración Eficiente con for...of
console.log("Modelos de autos disponibles actualmente:");
for (const auto of inventarioAutos) {
  console.log(`- ${auto.modelo}`);
}
console.log("--------------------------------------------------");

// 4. Consulta de cantidad con lista de modelos y detalle de unidades
let respuestaConsultar = prompt("¿Quieres saber qué cantidad existe de algún modelo? (si/no)");

while (!respuestaConsultar || (respuestaConsultar.toLowerCase() !== "si" && respuestaConsultar.toLowerCase() !== "no")) {
  respuestaConsultar = prompt("Opción inválida. Responde con 'si' o 'no': ¿Quieres saber qué cantidad existe de algún modelo?");
}

if (respuestaConsultar.toLowerCase() === "si") {
  let listaModelosTexto = inventarioAutos.map(auto => auto.modelo).join(", ");
  let modeloConsulta = prompt(`¿De qué modelo deseas saber la cantidad? (${listaModelosTexto})`);
  let nombresMinusculas = obtenerNombresMinusculas(inventarioAutos);

  while (!modeloConsulta || !nombresMinusculas.includes(modeloConsulta.toLowerCase())) {
    modeloConsulta = prompt(`Modelo no encontrado. Por favor, escríbelo correctamente (${listaModelosTexto}):`);
  }

  let indice = nombresMinusculas.indexOf(modeloConsulta.toLowerCase());
  // Muestra por pantalla (vía alert) y consola las unidades del modelo solicitado
  alert(`El modelo ${inventarioAutos[indice].modelo} tiene ${inventarioAutos[indice].cantidad} unidades.`);
  console.log(`\n🔍 El modelo "${inventarioAutos[indice].modelo}" tiene ${inventarioAutos[indice].cantidad} unidades disponibles.`);
  console.log("--------------------------------------------------");
}

// 5. Pregunta de eliminación con modelos y sus unidades incluidas en el prompt
let resumenConUnidades = inventarioAutos.map(auto => `${auto.modelo} (${auto.cantidad} unidades)`).join(", ");
let respuestaEliminar = prompt(`¿Deseas eliminar algún modelo por falta de stock? (si/no) (${resumenConUnidades})`);

while (!respuestaEliminar || (respuestaEliminar.toLowerCase() !== "si" && respuestaEliminar.toLowerCase() !== "no")) {
  respuestaEliminar = prompt(`Opción inválida. Responde 'si' o 'no': ¿Deseas eliminar algún modelo por falta de stock? (${resumenConUnidades})`);
}

if (respuestaEliminar.toLowerCase() === "si") {
  let nombresMinusculas = obtenerNombresMinusculas(inventarioAutos);
  let modeloAEliminar = prompt(`Ingresa el nombre del modelo a eliminar: (${resumenConUnidades})`);

  while (!modeloAEliminar || !nombresMinusculas.includes(modeloAEliminar.toLowerCase())) {
    modeloAEliminar = prompt(`Nombre incorrecto o no existe. Vuelve a escribirlo tal como aparece aquí: (${resumenConUnidades})`);
  }

  let indiceAEliminar = nombresMinusculas.indexOf(modeloAEliminar.toLowerCase());
  let autoEliminado = inventarioAutos[indiceAEliminar];
  
  inventarioAutos.splice(indiceAEliminar, 1);
  console.log(`\n✅ El modelo ${autoEliminado.modelo} (${autoEliminado.cantidad} unidades) ha sido eliminado exitosamente.`);

  console.log("\nInventario actualizado tras la eliminación:");
  for (const auto of inventarioAutos) {
    console.log(`- Modelo: ${auto.modelo} | Cantidad: ${auto.cantidad} | Colores: ${auto.colores.join(", ")}`);
  }
  console.log("--------------------------------------------------");
}

// 6. Pregunta de agregar nuevo modelo con resumen de existencias
let resumenInventarioFinal = inventarioAutos.map(auto => `${auto.modelo} (${auto.cantidad} unidades)`).join(", ");
let respuestaAgregar = prompt(`El inventario actual es: ${resumenInventarioFinal}.\n\n¿Deseas agregar algún otro modelo al inventario? (si/no)`);

while (!respuestaAgregar || (respuestaAgregar.toLowerCase() !== "si" && respuestaAgregar.toLowerCase() !== "no")) {
  respuestaAgregar = prompt(`pción inválida. Responde 'si' o 'no':\nEl inventario actual es: ${resumenInventarioFinal}.\n¿Deseas agregar algún otro modelo al inventario?`);
}

if (respuestaAgregar.toLowerCase() === "si") {
  let nuevoModelo = prompt("Ingresa el nombre del nuevo modelo:");
  let nombresMinusculas = obtenerNombresMinusculas(inventarioAutos);

  let cantidadInput = prompt("Ingresa la cantidad disponible:");
  let nuevaCantidad = parseInt(cantidadInput, 10);

  while (isNaN(nuevaCantidad) || nuevaCantidad < 0) {
    nuevaCantidad = parseInt(prompt("Por favor ingresa un número válido para la cantidad:"), 10);
  }

  let nuevoAuto = {
    modelo: nuevoModelo,
    cantidad: nuevaCantidad,
    colores: ["blanco", "negro", "azul"]
  };

  inventarioAutos.push(nuevoAuto);
  console.log(`\n✅ El modelo "${nuevoModelo}" con ${nuevaCantidad} unidades ha sido agregado exitosamente.`);

  // Estado final mostrado con for...of
  console.log("\nEstado final del inventario:");
  for (const auto of inventarioAutos) {
    console.log(`- Modelo: ${auto.modelo} | Cantidad: ${auto.cantidad} | Colores: ${auto.colores.join(", ")}`);
  }
}

console.log("\nProceso finalizado. ¡Gracias!");
