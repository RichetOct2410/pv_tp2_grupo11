const nombres = ["Elena", "Juan", "Sebastian", "Valentina", "Federico", "Joaquin"];
console.log("Lista de nombres");
nombres.forEach((nombre, index) => {
    console.log(`Nombre ${index + 1}: ${nombre}`);
});
let nombreMasLargo = nombres[0];
for (const nombre of nombres) {
    if (nombre.length > nombreMasLargo.length) {
        nombreMasLargo = nombre;
    }
}
console.log(`el nombre mas largo es: ${nombreMasLargo} (con ${nombreMasLargo.length} caracteres)`);