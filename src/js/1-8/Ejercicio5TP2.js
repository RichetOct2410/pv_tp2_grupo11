const hora = 24;
const minutos = 60;
let seghora;
let segmi;
let segundos;

seghora = hora * 3600;
segmi = minutos * 60;

segundos = seghora + segmi;

console.log("Horas: " + hora);
window.alert("Horas: " + hora);
console.log("Minutos: " + minutos);
window.alert("Minutos: " + minutos);
console.log("Conversion a segundos: " + segundos);
window.alert("Conversion a segundos: " + segundos);