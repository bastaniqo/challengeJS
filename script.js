
var cards= []
var send = document.getElementById('send')
var numb = document.getElementById('cardNumb')
var date = document.getElementById('date')
var cardholder = document.getElementById('cardholder')
var type = document.getElementById('marca')
send.addEventListener('click', (event) => {
    event.preventDefault();

let card= {
    marca:type.value,
    numberOfCard:numb.value,
    Name:cardholder.value,
    date:date.value
}
cards.push(card)
console.log(cards);


});

// Crear una clase ejecutable con 3 objetos de tipo tarjeta.

class Tarjeta{
    constructor(marca, numero, cardholder, vencimiento, importe){
        this.marca = marca;
        this.numero = numero;
        this.cardholder = cardholder;
        this.vencimiento = vencimiento;
        this.importe = importe;
    }
}

// Invocar un método que devuelva toda la información de una tarjeta.

function mostrarTarjeta(){
    console.log("marca de la tarjeta: "+this.marca+" numero de tarjeta: "+this.numero+" nombre de usuario: "+this.cardholder+" vencimiento: "+this.dia+"/"+this.mes+"/"+this.año+" monto de importe: "+this.importe);
}

// Informar si una operación es valida.

function validarOperacion(monto){
    if(monto<1000){
        console.log("Operación válida, monto a extraer: "+monto);
    }
    else{
        console.log("Operación inválida, usted quiso extraer: "+monto);
    }
}

// Informar si una tarjeta es valida para operar.

function validateOperation(){
    var date=new Date()
    var fechaActual=date.getDate()
    var mesActual=date.getMonth()
    var añoActual=date.getFullYear()
    if(this.dia>fechaActual){
        if(this.mes>=mesActual){
            if(this.año>=añoActual){
                console.log("Su operación es valida, su vencimiento es superior a la fecha actual ("+fechaActual+"/"+mesActual+"/"+añoActual+")")
        }
        else{console.log("No se puede realizar la operación, su fecha de vencimiento caducó")}
    }
    else{console.log("No se puede realizar la operación, su fecha de vencimiento caducó")}

}
else if(this.dia<=fechaActual && this.mes>mesActual && this.año>=añoActual){
    console.log("Su operación es válida, su vencimiento es superior a la fecha actual ("+fechaActual+"/"+mesActual+"/"+añoActual+")")
}

else{console.log("No se puede realizar la operación, su fecha de vencimiento caducó")}
}

// Identificar si una tarjeta es distinta a otra.

function validarTarjeta(){
    let tarjeta1 = new Tarjeta("VISA", "123456789", "Juan", "12/20");
    let tarjeta2 = new Tarjeta("NARA", "123456789", "Juan", "12/20"); 
    if(tarjeta1.marca != tarjeta2.marca){ 
        console.log("Tarjeta distinta");
    }
}

// Obtener por medio de un método la tasa de operación informando marca e importe.

function obtenerTasa() {
    if(this.marca="visa"){
        var tasa=this.año/this.mes
        var precioFinal=this.importe-tasa
        console.log("Tarjeta: "+this.marca+" monto de importe: "+this.importe+" tasa de la operacion: "+tasa+ " precio final incluyendo impuesto: "+precioFinal)

    }
    if(this.marca="nara"){
        var tasa=this.mes*0.5
        var precioFinal=this.importe-tasa
        console.log("Tarjeta: "+this.marca+" monto de importe: "+this.importe+" tasa de la operacion: "+tasa+ " precio final incluyendo impuesto: "+precioFinal)
    }
    if(this.marca="amex"){
        var tasa=this.mes*0.1
        var precioFinal=this.importe-tasa
        console.log("Tarjeta: "+this.marca+" monto de importe: "+this.importe+" tasa de la operacion: "+tasa+ " precio final incluyendo impuesto: "+precioFinal)
    }
}


//Los resultados se mostrarán en consola.
