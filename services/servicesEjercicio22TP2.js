export function actualizarContenido(elemento, texto) {
    if (texto.length === 0) {
        elemento.textContent = "esperando que escribas algo";
        elemento.style.color = "#888";
    } else {
        elemento.textContent = texto;
        elemento.style.color = "#333";
    }
}