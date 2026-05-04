/* import { servicesvictorefimov } from "../../../services/servicesvictorefimov.js";
import {servicesOctavioRicci} from "../../../services/servicesOctavioRicci.js";
import { servicesLucianaCardozo } from "../../../services/servicesLucianaCardozo.js";
servicesvictorefimov();
servicesOctavioRicci();
servicesLucianaCardozo();
 */
import { mostrarEstudiante } from "../../../services/servicesEjercicio20.js";

// Esperar al DOM
document.addEventListener('DOMContentLoaded', () => {
    
    const formulario = document.querySelector('#form-carga');
    const contenedorResultado = document.querySelector('#resultado');

    console.log(formulario);
    // Capturar datos
     formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const inputNombre = document.querySelector('#nombre');
        const inputApellido = document.querySelector('#apellido');
        const inputLU = document.querySelector('#lu');

        const nombreVal = inputNombre.value;
        const apellidoVal = inputApellido.value;
        const luVal = inputLU.value;

        contenedorResultado.innerHTML = '';

        contenedorResultado.appendChild(mostrarEstudiante(nombreVal, apellidoVal, luVal));

        formulario.reset();
    });
});
