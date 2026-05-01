import { actualizarCapital, cambiarFondo, mostrar, datos } 
from "/services/servicesEjercicio21.js";
const selectPais = document.getElementById("pais");
const selectCapital = document.getElementById("capital");
selectPais.addEventListener("change", () => {
    const pais = selectPais.value;
    if (pais === "") {
        selectCapital.value = "";
        document.body.style.backgroundImage = "";
        return;}

    actualizarCapital(pais, selectCapital);
    cambiarFondo(pais);
    const capital = selectCapital.value;
    mostrar(pais, capital);}
);

selectCapital.addEventListener("change", () => {
    const capital = selectCapital.value;
    if (capital === "") {
        selectPais.value = "";
        document.body.style.backgroundImage = "";
        return;}
    const pais = Object.keys(datos).find(
        key => datos[key] === capital
    );
    selectPais.value = pais;
    cambiarFondo(pais);
    mostrar(pais, capital);}
);