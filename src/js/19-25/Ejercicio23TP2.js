import {Longitud} from '../../../services/servicesEjercicio23TP2.js';

const campos = document.querySelectorAll('.texto');
const inputEntrada = campos[0];
const inputSalida = campos[1];

inputEntrada.addEventListener('input', () => {
    const valor = inputEntrada.value;
    inputSalida.value = valor;

    const estilo = Longitud(valor);

    inputSalida.style.backgroundColor = estilo.fondo;
    inputSalida.style.color = estilo.color;
});