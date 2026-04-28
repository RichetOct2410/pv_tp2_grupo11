let edades = [15, 18, 20, 43, 21, 30, 32, 2];

const recorrer = (edades) =>{
    let suma = 0;
    for(let i=0; i < edades.length; i++) {
        console.log(`Edad: ${edades[i]}`);
        suma += edades[i];
    }   
    let promedio = suma / edades.length;
    return promedio;
}

let resultado = recorrer(edades);
console.log(`El promedio de las edades es: ${resultado}`);