function sumarRango(inicio, fin) { 
    if (inicio > fin) {
        document.write("<h1>Error</h1><p>el numero inicial debe ser menor o igual al final.</p>");
        return;
    }
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }
    return suma;
}
let inicio = parseInt(prompt("ingrese el numero inicial:"));
let fin = parseInt(prompt("ingrese el numero final:"));
let resultado = sumarRango(inicio, fin);
if (resultado !== undefined) {
    document.write(`<h1>resultado de sumar rango</h1>`);
    document.write(`<p>La suma de rangos entre ${inicio} y ${fin} es: <strong>${resultado}</strong></p>`);
}