function menuAurora () {

    let bienvenida = alert("Bienvenida/os a Aurora!") 
let menuIngresado = parseInt(prompt("Si desea un BRUNCH ingrese 1, si desea un TEANNER ingrese 2"))

while (menuIngresado != 1 && menuIngresado != 2) 
        {menu = parseInt(prompt("Lo siento, esa opción no es válida. (Ingresa solamente el número de la opción): 1-Brunch, 2-Teanner)"));}

    switch (menuIngresado) {
        case 1:
            let menuBrunch = parseInt(prompt("Elige tu BRUNCH 1) Verano, 2) Otoño, 3) Primavera, 4) Verano"))
            
            if (menuBrunch === 1) {
                alert("¡Excelente opción, no te vas a arrepentir!, El menu elegido cuesta $450"); 
            
            } else if (menuBrunch === 2) {
                alert("¡Excelente opción, no te vas a arrepentir!, El menu elegido cuesta $450"); 
                
            } else if (menuBrunch === 3) {
                alert("¡Excelente opción, no te vas a arrepentir!, El menu elegido cuesta $450"); 
                
            } else if (menuBrunch === 4) {
                alert("¡Excelente opción, no te vas a arrepentir!, El menu elegido cuesta $450"); 
            }
    
    let comensales = parseInt(prompt("¿Para cuántas personas preparamos el pedido?"));
    let total = comensales * 450;
    alert("Gracias por confiar en Aurora, el total a pagar es de:" + total);
    let despedida = confirm("¿Desea otro menú?") 
    }

    switch (menuIngresado) {
        case 2:
            let menuTeanner = parseInt(prompt("Elige tu TEANNER 1) Verano, 2) Otoño, 3) Primavera, 4) Verano"))
            
            if (menuTeanner === 1) {
                alert("¡Excelente opción, no te vas a arrepentir!, El menu elegido cuesta $450"); 
            
            } else if (menuTeanner === 2) {
                alert("¡Excelente opción, no te vas a arrepentir!, El menu elegido cuesta $450"); 
                
            } else if (menuTeanner === 3) {
                alert("¡Excelente opción, no te vas a arrepentir!, El menu elegido cuesta $450"); 
                
            } else if (menuTeanner === 4) {
                alert("¡Excelente opción, no te vas a arrepentir!, El menu elegido cuesta $450"); 
            }

    let comensales = parseInt(prompt("¿Para cuántas personas preparamos el pedido?"));
    let total = comensales * 450;
    alert("Gracias por confiar en Aurora, el total a pagar es de:" + total);
    let despedida = confirm("¿Desea otro menú?")
    }
}



    