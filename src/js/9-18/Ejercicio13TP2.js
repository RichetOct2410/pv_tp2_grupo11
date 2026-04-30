function mostrarArreglo(arreglo) {
    for (let i=0; i< arreglo.length; i++){
        document.write(`<p>${arreglo[i]}</p>`);
    }
}
let cantidad=parseInt(prompt("Ingrese la cantidad de números:"));
let numeros=[];

for (let i=0;i<cantidad; i++) {
    numeros[i]=parseFloat(prompt(`Ingrese el número ${i + 1}:`));
}

document.write(`<h1>Elementos del Arreglo</h1>`);
mostrarArreglo(numeros);