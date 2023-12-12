do{
    let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido")
alert(`Bienvenido a PlayMania ${nombre} ${apellido}`);

let elejirJuego= prompt("Que juego desea: Fifa , Pes, Horizon ").toLowerCase();

function seleccionJuego() {
    if (elejirJuego == "fifa") {
        alert("Elejiste el fifa, su precio es $25000")
    } else if (elejirJuego == "pes") {
        alert("Elejiste el Pes, su precio es $20000")
    } else if (elejirJuego == "horizon") {
        alert("Elejiste el Horizon su precio es $ 10000")
    } else {
        alert("No haz elejido nada")
    }
}

seleccionJuego();

let pago = Number(prompt("Como quieres abonar: 1: Debito , 2: Credito"));

function metodoPago(){
    if(pago === 1){
        alert("Elejiste pagar al contado")
    }else if(pago === 2){
        alert("Elejiste pagar con credito, por el momento solo tenemos 1 solo pago sin interes")
    }else{
        alert("Opcion incorrecta")
    }
}

metodoPago();
}while(confirm("Deseas comprar otro juego?"));
