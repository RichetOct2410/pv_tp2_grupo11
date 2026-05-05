import { actualizarContenido } from '../../../services/servicesEjercicio22TP2.js';

const input = document.getElementById('inputtexto');
const visor = document.getElementById('resultado');

if (input && visor) {
    input.addEventListener('input', (e) => {
        actualizarContenido(visor, e.target.value);
    });
}