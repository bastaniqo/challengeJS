// Crear una clase ejecutable con 3 objetos de tipo tarjeta.
class Tarjeta{
    constructor(marca, numero, cardholder, vencimiento){
        this.marca = marca;
        this.numero = numero;
        this.cardholder = cardholder;
        this.vencimiento = vencimiento;
    }
}

// Invocar un método que devuelva toda la información de una tarjeta.

function mostrarTarjeta(){
    let tarjeta = new Tarjeta("VISA", "123456789", "Juan", "12/20");
    console.log(tarjeta); 
}

// Informar si una operación es válida.
function validarOperacion(){
    let tarjeta = new Tarjeta("VISA", "123456789", "Juan", "12/20");
    if(tarjeta.marca == "VISA"){
        console.log("Operacion valida");
    }else{
        console.log("Operacion invalida");   
    }
}

// Informar si una tarjeta es valida para operar.
function validarTarjeta(){
    let tarjeta = new Tarjeta("VISA", "123456789", "Juan", "12/20");
    if(tarjeta.marca == "VISA" && tarjeta.vencimiento == "12/20"){
        console.log("Tarjeta valida");
    }else{
        console.log("Tarjeta invalida");
    }
}
// Indentificar si una tarjeta es distinta a otra.

function validarTarjeta(){
    let tarjeta1 = new Tarjeta("VISA", "123456789", "Juan", "12/20");
    let tarjeta2 = new Tarjeta("NARA", "123456789", "Juan", "12/20"); 
    if(tarjeta1.marca != tarjeta2.marca){ 
        console.log("Tarjeta distinta");
    }
}

// Obtener por medio de un método la tasa de operación informando marca e importe.
function obtenerTasa(){
    let tarjeta = new Tarjeta("VISA", "123456789", "Juan", "12/20");
    if(tarjeta.marca == "VISA"){
        console.log("Tasa de operacion: 0.05");
    }else if(tarjeta.marca == "NARA"){
        console.log("Tasa de operacion: 0.03");
    }
}

