export const datos = {
    argentina: "buenosaires",
    brasil: "brasilia",
    chile: "santiago",
    peru: "lima",
    uruguay: "montevideo",
    colombia: "bogota",
    ecuador: "quito",
    venezuela: "caracas",
    paraguay: "asuncion",
    bolivia: "sucre",
    surinam: "paramaribo",
    cuba: "lahabana"
};
export const banderas = {
    argentina: "/assets/imagenes/arg.png",
    brasil: "/assets/imagenes/bra.png",
    chile: "/assets/imagenes/chl.png",
    peru: "/assets/imagenes/per.png",
    uruguay: "/assets/imagenes/uru.png",
    colombia: "/assets/imagenes/col.png",
    ecuador: "/assets/imagenes/ecu.png",
    venezuela: "/assets/imagenes/ven.png",
    paraguay: "/assets/imagenes/par.png",
    bolivia: "/assets/imagenes/bol.png",
    surinam: "/assets/imagenes/sur.png",
    cuba: "/assets/imagenes/cub.png"
};

export function actualizarCapital(paisSeleccionado, selectCapital) {
                selectCapital.value = datos[paisSeleccionado];}
export function cambiarFondo(pais) {
        const body = document.body;
    body.style.opacity = 0;
    setTimeout(() => {
        body.style.backgroundImage = `url('${banderas[pais]}')`;
        body.style.opacity = 1;}, 200);}

export function mostrar(pais, capital) {
    console.log("País:", pais);
    console.log("Capital:", capital);}