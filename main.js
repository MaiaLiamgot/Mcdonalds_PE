let pedido1;
let pedido2;

function mcdonalds () {
    pedido1 = prompt("Elija la hamburguesa para su combo: mcfiesta o mcnifica");
    pedido2 = prompt("Elija la bebida para su combo: coca o sprite");

    while ((pedido1 != "mcfiesta") && (pedido1 != "mcnifica")) {
        pedido1 = prompt ("ERROR Debe elegir una hamburguesa: Mcfiesta o Mcnifica").toLowerCase();
    }
    while ((pedido2 != "coca") && (pedido2 != "sprite")) {
        pedido2 = prompt ("ERROR Debe elegir una bebida: Coca o Sprite").toLowerCase();
    } 

    if (pedido1 == "mcfiesta") {
        pedido1 = alert (`Su hamburguesa es una Mcfiesta con ${pedido2} Excelente eleccion!`);
        return (pedido1)
    } else if ( pedido1 == "mcnifica") {
        pedido1 = alert (`Su hamburguesa es una Mcnifica con ${pedido2}, Excelente eleccion!`);
        return (pedido1)
    } else if ( pedido2 == "coca") {
        pedido2 = alert ("Su bebida es una Coca Cola, Excelente eleccion!");
        return (pedido2)
    } else {
        pedido2 = alert ("Su bebida es una Sprite, Excelente eleccion!");
        return (pedido2)
    }
    

}

mcdonalds ();

console.log (`La hamburguesa elegida es ${pedido1}`)
console.log (`La bebida elegida es ${pedido2}`)

function pagar () {
    let abono = prompt (`Su combo es ${pedido1} con ${pedido2}, abona en efectivo o tarjeta?`)

    while ((abono != "efectivo") && (pedido1 != "tarjeta")) {
        abono = prompt (" ERROR Debe elegir un metodo de pago, abona en efectivo o tarjeta?")
    }
if (abono == "efectivo") {
    abono = alert ("Acerquese a su mcdonalds mas cercano");
    return (abono)
} else if (abono == "tarjeta") {
    abono = alert ("Prepare sus datos y acerquese a su mcdonalds mas cercano")
    return (abono)
}
}

pagar ();

