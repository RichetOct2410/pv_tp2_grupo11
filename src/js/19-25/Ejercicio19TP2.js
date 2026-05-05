import { modificarTexto } from '../../../services/servicesEjercicio19TP2.js';
const parrafo = document.getElementById('textoParrafo');
const boton = document.getElementById('btnCambiar');
if (boton && parrafo) {
    boton.addEventListener('click', () => {
        modificarTexto(parrafo, "el texto se cambio");
    });
}