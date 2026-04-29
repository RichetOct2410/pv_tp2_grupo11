let cantidad = parseInt(prompt("¿cuantos numeros deseas ingresar?"));
let numeros = [];
let suma = 0;
for (let i = 0; i < cantidad; i++) {
    let numero = parseFloat(prompt(`ingresa el numero ${i + 1}:`));
    numeros.push(numero);
    suma += numero;
}
let promedio = suma / cantidad;
document.write(`<h1>Resultados</h1>`);
document.write(`<p>los numeros ingresados son: ${numeros.join(", ")}</p>`);
document.write(`<p>el promedio es: ${promedio}</p>`);