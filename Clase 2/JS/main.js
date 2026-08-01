
const usuarioC = "Gabriel";
const passC = "12345";
const maxIntentos = 3;

for (let i = 0; i < maxIntentos; i++) {
    let usuario = prompt(`--- SISTEMA DE ACCESO ---\nIntento ${i + 1} de ${maxIntentos}\n\nPor favor, ingresa tu nombre de usuario:`);
    // Solicitamos la contraseña (sin parseInt para que se mantenga como String)
    let pass = prompt("Ingresa tu contraseña:");
    // Verificación de credenciales
    if (usuario === usuarioC && pass === passC) {
        alert("¡Bienvenido! Puedes ingresar.");
        break; // Sale del bucle al ingresar correctamente
    } else {
        // Manejo de errores por intento
        if (i === 0) {
            alert("Credenciales incorrectas. Pista: El usuario es Gaxxxel. Te quedan 2 intentos.");
        } else if (i === 1) {
            alert("Credenciales incorrectas. Pista: La contraseña es 1xxx5. Te queda 1 intento.");
        } else if (i === 2) {
            alert("Has agotado todos tus intentos. El usuario ha sido bloqueado.");
        }
    }
}

