console.log("Te voy a pedir darm tu Nombre, Apellido y Año de Nacimiento")
let nombre= prompt("Ingresa tu nombre");
let apellido= prompt("Ingresa tu apellido");
let nacimiento= prompt("Ingresa tu año de nacimiento");
nacimiento =  parseInt(nacimiento);

console.log(nombre + " " + apellido + ", tu edad es: " + (2026-nacimiento));