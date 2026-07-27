let edad = 18;
let dinero= true;
 if(edad >= 18 && dinero ==true) { 
    console.log("Poder ingresar")
  }
else (
    console.log("Eres menor dedad no peudes entrar")
)
let login = false
while (login === false) {
    let password = prompt("Ingrese la contraseña para ingresar")
    if(password == 123456) {
      console.log("Contraseña correcta, ingresando...")
      login == true
    } else {
        console.log("Contraseña incorrecta, reintentar")
    }
}

// Declaración de función
function saludar(nombre) {
  console.log("Hola, " + nombre + "!")
}
let numero1= prompt("Ingresa un numero");
let numero2= prompt("Ingresa un segundo numero");
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
function sumar(numero1, numero2){ 
    console.log(numero1 + numero2);
}
console.log

const suma = (a, b) => a + b
console.log(suma(5, 3)) // Salida: 8


// La función recibe otra función como parámetro
function procesarNumero(numero, accion) {    
  return accion(numero)
}
// Funciones que podemos pasar como argumento
const duplicar = (n) => n * 2
const cuadrado = (n) => n * n
console.log(procesarNumero(5, duplicar)) // 10
console.log(procesarNumero(5, cuadrado)) // 25


 //{ }[ ] >< y es && y el or es|| 