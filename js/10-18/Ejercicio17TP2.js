let contarLetraA = (palabra) => {
    let a = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] == 'a') {
            a++;
        }
    }
    console.log("Cantidad de veces que aparece la letra 'a': " + a);
    window.alert("Cantidad de veces que aparece la letra 'a': " + a);
}

let palabra = prompt("Por favor, ingrese una palabra:");
console.log("Palabra ingresada: " + palabra);
window.alert("Palabra ingresada: " + palabra);
contarLetraA(palabra);