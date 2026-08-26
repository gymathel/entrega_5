// 1. Definición de la Clase Auto (Fábrica de Objetos)
class Auto {
  constructor(id, modelo, cantidad, colores) {
    this.id = id;
    this.modelo = modelo;
    this.cantidad = cantidad;
    this.colores = colores;
  }

  // Métodos de instancia
  vender(unidades = 1) {
    if (this.cantidad >= unidades) {
      this.cantidad -= unidades;
      console.log(`Venta realizada: Se vendieron ${unidades} unidad(es) de ${this.modelo}. Stock restante: ${this.cantidad}`);
    } else {
      console.log(`Stock insuficiente de ${this.modelo}. Unidades disponibles: ${this.cantidad}`);
    }
  }

  obtenerResumen() {
    return `ID: ${this.id} | Modelo: ${this.modelo} | Stock: ${this.cantidad} | Colores: ${this.colores.join(", ")}`;
  }
}

// 2. Instanciación de Objetos (Uso del operador new)
const auto1 = new Auto(1, "Equinox", 15, ["blanco", "negro", "azul"]);
const auto2 = new Auto(2, "Corolla", 22, ["blanco", "negro", "azul"]);
const auto3 = new Auto(3, "Silverado", 12, ["blanco", "negro", "azul"]);
const auto4 = new Auto(4, "Trailblazer", 22, ["blanco", "negro", "azul"]);

// 3. Array de Inventario de Objetos
let inventarioAutos = [auto1, auto2, auto3, auto4];

// Pedir nombre del administrador
let nombreAdmin = prompt("Por favor, ingresa tu nombre de administrador:");
while (!nombreAdmin || nombreAdmin.trim() === "") {
  nombreAdmin = prompt("Nombre no válido. Por favor, ingresa tu nombre de administrador:");
}
console.log("--------------------------------------------------");
console.log(`BIENVENIDO AL SISTEMA, ${nombreAdmin.toUpperCase()} ===\n`);
console.log("--------------------------------------------------");

// Visualización inicial con método de instancia
console.log("Modelos de autos disponibles actualmente:");
for (const auto of inventarioAutos) {
  console.log(`- ${auto.obtenerResumen()}`);
}
console.log("--------------------------------------------------");
console.log("--------------------------------------------------");

// 4. Consulta de cantidad y nombres de todo el inventario
let respuestaConsultar = prompt("¿Quieres saber la cantidad y nombre de todo el inventario? (si/no)");

while (!respuestaConsultar || (respuestaConsultar.toLowerCase() !== "si" && respuestaConsultar.toLowerCase() !== "no")) {
  respuestaConsultar = prompt("Opción inválida. Responde con 'si' o 'no': ¿Quieres saber la cantidad y nombre de todo el inventario?");
}

if (respuestaConsultar.toLowerCase() === "si") {
  // Construye la lista completa con modelo y cantidad
  let detalleInventario = inventarioAutos
    .map(auto => `${auto.modelo}: ${auto.cantidad} unidad(es)`)
    .join("\n");

  alert(`Inventario Completo:\n\n${detalleInventario}`);
  
  console.log("\n🔍 Detalle completo del inventario:");
  inventarioAutos.forEach(auto => {
    console.log(`- Modelo: ${auto.modelo} | Cantidad: ${auto.cantidad}`);
  });
  console.log("--------------------------------------------------");
  console.log("--------------------------------------------------");
}

// 5. Simulación de venta usando el método de la Clase
let respuestaVenta = prompt("¿Deseas registrar la venta de alguna unidad? (si/no)");

while (!respuestaVenta || (respuestaVenta.toLowerCase() !== "si" && respuestaVenta.toLowerCase() !== "no")) {
  respuestaVenta = prompt("Opción inválida. Responde 'si' o 'no': ¿Deseas registrar la venta de alguna unidad?");
}

if (respuestaVenta.toLowerCase() === "si") {
  let listaModelosTexto = inventarioAutos.map(auto => auto.modelo).join(", ");
  let modeloVenta = prompt(`¿Qué modelo se vendió? (${listaModelosTexto})`);
  
  let autoEncontrado = inventarioAutos.find(auto => auto.modelo.toLowerCase() === modeloVenta?.trim().toLowerCase());

  while (!modeloVenta || !autoEncontrado) {
    modeloVenta = prompt(`Modelo no encontrado. Por favor, escríbelo correctamente (${listaModelosTexto}):`);
    autoEncontrado = inventarioAutos.find(auto => auto.modelo.toLowerCase() === modeloVenta?.trim().toLowerCase());
  }

  let cantidadVendidaInput = prompt(`¿Cuántas unidades de ${autoEncontrado.modelo} se vendieron?`);
  let cantidadVendida = parseInt(cantidadVendidaInput, 10);

  while (isNaN(cantidadVendida) || cantidadVendida <= 0) {
    cantidadVendida = parseInt(prompt("Por favor ingresa un número válido y mayor a 0 para la cantidad:"), 10);
  }

  if (autoEncontrado.cantidad >= cantidadVendida) {
    autoEncontrado.vender(cantidadVendida);

    // Mensaje por pantalla (alert) y por consola felicitando al usuario
    let mensajeExito = `🎉 ¡Felicitaciones por la venta! \n\nSe vendieron ${cantidadVendida} unidad(es) de ${autoEncontrado.modelo}.\nStock restante actual: ${autoEncontrado.cantidad} unidades.`;
    
    alert(mensajeExito);
    console.log(`\n${mensajeExito}`);
  } else {
    alert(`No se pudo concretar la venta. Stock insuficiente de ${autoEncontrado.modelo}. Disponibles: ${autoEncontrado.cantidad}`);
  }
  
  console.log("--------------------------------------------------");
  console.log("--------------------------------------------------");
}

// 6. Reposición de inventario (utilizando el operador new)
let resumenConUnidades = inventarioAutos.map(auto => `${auto.modelo} (${auto.cantidad} unidades)`).join(", ");
let respuestaReponer = prompt(`¿Quieres solicitar que repongan más inventario? (si/no)\nEstado actual: ${resumenConUnidades}`);

while (!respuestaReponer || (respuestaReponer.toLowerCase() !== "si" && respuestaReponer.toLowerCase() !== "no")) {
  respuestaReponer = prompt(`Opción inválida. Responde 'si' o 'no': ¿Quieres solicitar que repongan más inventario?`);
}

if (respuestaReponer.toLowerCase() === "si") {
  let listaModelosTexto = inventarioAutos.map(auto => auto.modelo).join(", ");
  let modeloReponer = prompt(`Ingresa el nombre del modelo a reponer (${listaModelosTexto}):`);
  
  // Se busca el índice del elemento para poder reemplazarlo más adelante
  let indiceEncontrado = inventarioAutos.findIndex(auto => auto.modelo.toLowerCase() === modeloReponer?.trim().toLowerCase());

  while (!modeloReponer || indiceEncontrado === -1) {
    modeloReponer = prompt(`Modelo no encontrado en el inventario. Ingresa un modelo existente (${listaModelosTexto}):`);
    indiceEncontrado = inventarioAutos.findIndex(auto => auto.modelo.toLowerCase() === modeloReponer?.trim().toLowerCase());
  }

  let cantidadReponerInput = prompt(`¿Cuántas unidades deseas agregar al modelo ${inventarioAutos[indiceEncontrado].modelo}?`);
  let cantidadReponer = parseInt(cantidadReponerInput, 10);

  while (isNaN(cantidadReponer) || cantidadReponer <= 0) {
    cantidadReponer = parseInt(prompt("Ingresa un número válido mayor a 0 para la cantidad:"), 10);
  }

  // Obtenemos los datos del objeto actual
  let autoViejo = inventarioAutos[indiceEncontrado];
  let nuevoStockTotal = autoViejo.cantidad + cantidadReponer;

  // Uso del operador 'new' para instanciar un nuevo objeto Auto con el stock sumado
  let autoActualizado = new Auto(autoViejo.id, autoViejo.modelo, nuevoStockTotal, autoViejo.colores);

  // Reemplazamos el objeto anterior por la nueva instancia en el array
  inventarioAutos[indiceEncontrado] = autoActualizado;

  let mensajeExito = `Reposición exitosa: Se instanció de nuevo el modelo ${autoActualizado.modelo} con ${cantidadReponer} unidad(es) extra.\nNuevo stock: ${autoActualizado.cantidad}.`;
  alert(mensajeExito);

  console.log(`\n${mensajeExito}`);
  console.log("\nInventario actualizado tras la reposición:");
  for (const auto of inventarioAutos) {
    console.log(`- ${auto.obtenerResumen()}`);
  }
  console.log("--------------------------------------------------");
  console.log("--------------------------------------------------");
}

console.log("\nProceso finalizado. ¡Gracias!");