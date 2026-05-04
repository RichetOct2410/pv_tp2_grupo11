export function obtenerColorAleatorio() {
    const colores = ['#ff5733', '#33ff57', '#3357ff', '#f333ff', '#33fff3', '#f3ff33', '#ff3380', '#8033ff'];
    const indice = Math.floor(Math.random() * colores.length);
    return colores[indice];
}
export function cambiarFondo(elemento, color) {
    elemento.style.backgroundColor = color;
    console.log("color cambiado a: " + color);
}