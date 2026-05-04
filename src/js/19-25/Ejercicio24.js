import {obtenerMensaje} from '../../../services/servicesEjercicio24.js';

const radios = document.querySelectorAll('input[name="lenguaje"]');
const resultado = document.querySelector("#result");

radios.forEach(radio => {
    radio.addEventListener("change", () => {
        const valor = radio.value;
        resultado.textContent = obtenerMensaje(valor);
    });
});