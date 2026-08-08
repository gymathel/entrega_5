// 1. Función para el minijuego de apuestas
function pedirNumeroSecreto() {
    const NUMERO_SECRETO = 5;
    const PREMIO = 1000;
    let intentosRestantes = 3;
    let totalGanado = 0;

    while (intentosRestantes > 0) {
        let entrada = prompt(`Adivina el número del 1 al 10 para ganar $${PREMIO} pesos (Te quedan ${intentosRestantes} intento(s)):`);
        if (entrada === null) {
            console.log("Juego cancelado.");
            break;
        }
        let numero = parseInt(entrada);

        if (isNaN(numero) || numero < 1 || numero > 10) {
            console.log("Error: Debes ingresar un número válido entre 1 y 10.");
            continue;
        }
        if (numero === NUMERO_SECRETO) {
            console.log(`¡Felicidades! Adivinaste el número secreto y has ganado $${PREMIO} pesos.`);
            totalGanado = PREMIO;
            break;
        }
        intentosRestantes--;
        if (intentosRestantes > 0) {
            console.log(`Incorrecto. Te quedan ${intentosRestantes} intento(s).`);
        }
    }
    if (totalGanado === 0 && intentosRestantes === 0) {
        console.log(`Agotaste tus intentos. El número secreto era ${NUMERO_SECRETO}.`);
    }
    console.log(`\nJuego finalizado. Total ganado: $${totalGanado} pesos. Te estará llegando el dinero pronto.`);
}

// 2. Función para calcular la edad
function calcularEdad(nacimiento, actual) {
    return actual - nacimiento;
}

// 3. Función para alertar a menores de edad
function alertaMenorDeEdad(nombre) {
    alert("¡Atención " + nombre + "! Estaremos llamando a tus padres ya que este no es un sitio para menores de edad.");
    console.log("Acceso denegado: El usuario es menor de edad y no puede continuar.");
}

// --- FLUJO PRINCIPAL DEL PROGRAMA ---

const anioActual = new Date().getFullYear();
let tuNombre = prompt("Dime tu nombre:");

if (!tuNombre) tuNombre = "Jugador";

console.log("Un gusto en saludarte " + tuNombre + ", ya vamos a validar si puedes ingresar al juego.");

let fechadeN = prompt("Dime tu año de nacimiento:");
while (fechadeN === null || isNaN(fechadeN) || fechadeN.trim() === "") {
    fechadeN = prompt("Error: Debes ingresar un número. Dime tu año de nacimiento:");
}
fechadeN = parseInt(fechadeN);

const edad = calcularEdad(fechadeN, anioActual);
console.log("Tienes " + edad + " años.");

if (edad >= 18) {
    console.log("Puedes ingresar a la sala de mayores, eres mayor de edad.");
    console.log("Bienvenido " + tuNombre + ", iniciando el juego...");
    
    // Inicia directamente el juego
    pedirNumeroSecreto();
} else {
    alertaMenorDeEdad(tuNombre);
}
