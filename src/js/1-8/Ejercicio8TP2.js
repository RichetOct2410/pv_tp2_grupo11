let notas = [9, 6, 5, 1, 5, 10, 6, 8, 4, 3];
console.log ("Notas");
for (let i = 0; i < notas.length ; i++ )
{console.log(notas[i]);}

console.log("Aprobados")
for (let i = 0; i < notas.length ; i++ ){
    if (notas[i]>5){
        console.log(notas[i]);}}

console.log("Desaprobados")
for (let i = 0; i < notas.length ; i++ ){
    if (notas[i]<6){
        console.log(notas[i]);}}

let suma = 0;
for (let i = 0; i < notas.length ; i++){
   suma = suma + notas[i];
}
let promedio = suma / notas.length;
console.log("Promedio: "+promedio);

let aprobados = 0;
for (let i = 0; i < notas.length ; i++){
     if (notas[i]>5){
        aprobados++;}}
console.log("La cantidad de aprobados es: "+aprobados)