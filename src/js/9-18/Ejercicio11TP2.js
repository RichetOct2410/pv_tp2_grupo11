 function calcularConsumo(kilometros, litros) {
    return litros/kilometros;
}

let kilometros=parseFloat(prompt("Ingrese la cantidad de kilómetros recorridos:"));
let litros=parseFloat(prompt("Ingrese la cantidad de litros consumidos:"));

let consumo=calcularConsumo(kilometros, litros);

document.write(`<h1>Consumo de Combustible</h1>`);
document.write(`<p>La cantidad de kilómetros recorridos es: ${kilometros} km</p>`);
document.write(`<p>La cantidad de litros consumidos es: ${litros}litros</p>`);
document.write(`<p>El consumo por kilómetro es: <strong>${consumo.toFixed(2)}</strong> litros/km</p>`);
