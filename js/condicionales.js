
const nacimiento=2000;
let sueldo=120000;
const fecha = new Date();
const fechaActual=fecha.getFullYear();
let edad=fechaActual-nacimiento
var genero=prompt('Ingrese m para masculino o f para femenino','');

if(edad<=5){
    document.write(" niño tiene "+edad+ " años de edad")
}else if(edad<=17){
    document.write(" joven tiene"+edad+ " años de edad")  
} else{
    document.write(" señor(a) tiene "+edad+ " años de edad")  
}
