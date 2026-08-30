// 1. Definición de la Clase Auto (4 propiedades)
class Auto {
  constructor(id, escuderia) {
    this.id = id;
    this.escuderia = escuderia;
    this.puntosTotales = 0;
    this.historialCarreras = []; // Puntos acumulados carrera a carrera
  }

  agregarPuntos(puntos) {
    this.historialCarreras.push(puntos);
    this.puntosTotales += puntos;
  }
}

// 2. Base de datos (Array de objetos instanciados)
const competidores = [
  new Auto(1, "Ferrari"),
  new Auto(2, "McLaren"),
  new Auto(3, "Mercedes"),
  new Auto(4, "Red Bull")
];

// Puntos según la posición de llegada (1°, 2°, 3°, 4°)
const PUNTOS_POR_POSICION = [10, 5, 3, 1];

// Simular el orden de llegada aleatorio
function simularCarrera() {
  return [...competidores].sort(() => Math.random() - 0.5);
}

// Función principal del simulador
function ejecutarSimulador() {
  console.log("=== INICIO DEL CAMPEONATO (2 CARRERAS) ===");

  for (let numeroCarrera = 1; numeroCarrera <= 2; numeroCarrera++) {
    // Pedir predicción al usuario
    const eleccionUsuario = prompt(
      `--- CARRERA ${numeroCarrera} ---\n¿Quién creés que ganará esta carrera?\nOpción: Ferrari, McLaren, Mercedes o Red Bull`
    );

    // Método de Búsqueda 1: find (Buscar el auto apostado por el usuario)
    const autoApostado = competidores.find(
      (a) => a.escuderia.toLowerCase() === eleccionUsuario?.trim().toLowerCase()
    );

    if (autoApostado) {
      console.log(`Carrera ${numeroCarrera} - Tu apuesta: ${autoApostado.escuderia}`);
    } else {
      console.log(`Carrera ${numeroCarrera} - Selección no válida o cancelada.`);
    }

    // Ejecutar carrera aleatoria
    const ordenLlegada = simularCarrera();

    // Asignar puntos según la llegada
    ordenLlegada.forEach((auto, indice) => {
      const puntos = PUNTOS_POR_POSICION[indice];
      auto.agregarPuntos(puntos);
    });

    // Construir texto de posiciones para la alerta y consola
    let resumenPantalla = `RESULTADOS CARRERA ${numeroCarrera}\n\n`;
    ordenLlegada.forEach((auto, i) => {
      resumenPantalla += `${i + 1}° Lugar: ${auto.escuderia} (+${PUNTOS_POR_POSICION[i]} pts)\n`;
    });

    // Mostrar en Consola y Pantalla (Alert) al terminar la carrera
    console.log(`\n=== RESULTADOS CARRERA ${numeroCarrera} ===`);
    console.table(
      ordenLlegada.map((auto, i) => ({
        Posicion: `${i + 1}°`,
        Escuderia: auto.escuderia,
        PuntosSumados: PUNTOS_POR_POSICION[i]
      }))
    );
    alert(resumenPantalla);
  }

  // === MÉTODOS DE ORDEN SUPERIOR Y TABLA FINAL ===

  // Método de Transformación: map (Generar datos finales con la columna de cada carrera)
  const tablaGeneral = competidores.map((auto) => {
    return {
      ID: auto.id,
      Escuderia: auto.escuderia,
      Carrera_1: `${auto.historialCarreras[0] || 0} pts`,
      Carrera_2: `${auto.historialCarreras[1] || 0} pts`,
      TotalPuntos: auto.puntosTotales
    };
  });

  // Método de Acumulación: reduce (Sumar los puntos acumulados en todo el torneo)
  const totalPuntosTorneo = competidores.reduce((acc, auto) => acc + auto.puntosTotales, 0);

  // Determinar la máxima puntuación alcanzada
  const maxPuntos = Math.max(...competidores.map((a) => a.puntosTotales));

  // Método de Búsqueda 2: filter (Filtrar al ganador o ganadores en caso de empate)
  const ganadores = competidores.filter((auto) => auto.puntosTotales === maxPuntos);

  // Ordenar clasificación general descendentemente por puntos totales
  const clasificacionOrdenada = [...competidores].sort((a, b) => b.puntosTotales - a.puntosTotales);

  // Mostrar Tabla General en Consola
  console.log("\n=== CLASIFICACIÓN FINAL DEL TORNEO ===");
  console.table(tablaGeneral);
  console.log(`Puntos totales repartidos en el torneo: ${totalPuntosTorneo} pts`);

  // Construir mensaje detallado para la pantalla (Alert final)
  let mensajeFinalPantalla = "POSICIONES FINALES DEL TORNEO\n\n";

  clasificacionOrdenada.forEach((auto, i) => {
    mensajeFinalPantalla += `${i + 1}° Puesto: ${auto.escuderia} - ${auto.puntosTotales} pts Total (C1: ${auto.historialCarreras[0]}pts | C2: ${auto.historialCarreras[1]}pts)\n`;
  });

  mensajeFinalPantalla += `\n----------------------------------\n`;
  if (ganadores.length === 1) {
    mensajeFinalPantalla += `EL CAMPEÓN ES ${ganadores[0].escuderia.toUpperCase()}`;
  } else {
    const nombres = ganadores.map((g) => g.escuderia).join(" y ");
    mensajeFinalPantalla += `EMPATE EN EL 1° PUESTO ENTRE ${nombres.toUpperCase()}`;
  }

  // Imprimir por pantalla el resumen final
  alert(mensajeFinalPantalla);
}

// Ejecutar simulador
ejecutarSimulador();