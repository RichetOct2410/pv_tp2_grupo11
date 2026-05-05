import { obtenerColorAleatorio, cambiarFondo } from '../../../services/servicesEjercicio25TP2.js';
const boton = document.getElementById('btnColor');
const cuerpo = document.body;
if (boton) {
    boton.addEventListener('click', () => {
        const nuevoColor = obtenerColorAleatorio();
        cambiarFondo(cuerpo, nuevoColor);
    });
}