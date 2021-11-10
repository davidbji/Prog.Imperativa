let pratoPronto = "Prato pronto, bom apetite!!!"
let Pipoca = 1
let Macarrão = 2
let Carne = 3
let Feijão = 4
let Brigadeiro = 5
function microondas (prato, tempo) {
    if (prato=="pipoca" && tempo==10){
        console.log (pratoPronto)
    }
    else if (prato=="Pipoca" && tempo>20){
        console.log ("Comida queimou :(" + " " + pratoPronto)
    }
    else if (prato=="Pipoca" && tempo<10){
        console.log ("Tempo insuficiente" + " " + pratoPronto)
    }
    else if (prato=="Macarrão" && tempo==8){
        console.log (pratoPronto)
    }
    else if (prato=="Macarrão" && tempo>16){
        console.log ("Comida queimou :(" + " " + pratoPronto)
    }
    else if (prato=="Macarrão" && tempo<8){
        console.log ("Tempo insuficiente" + " " + pratoPronto)
    }
    else if (prato=="Carne" && tempo==15){
        console.log (pratoPronto)
    }
    else if (prato=="Carne" && tempo>30){
        console.log ("Comida queimou :(" + " " + pratoPronto)
    }
    else if (prato=="Carne" && tempo<15){
        console.log ("Tempo insuficiente" + " " + pratoPronto)
    }
    else if (prato=="Feijão" && tempo>24){
        console.log ("Comida queimou :(" + " " + pratoPronto)
    }
    else if (prato=="Feijão" && tempo<12){
        console.log ("Tempo insuficiente" + " " + pratoPronto)
    }
    else if (prato=="Brigadeiro" && tempo>16){
        console.log ("Comida queimou :(" + " " + pratoPronto)
    }
    else if (prato=="Brigadeiro" && tempo<8){
        console.log ("Tempo insuficiente" + " " + pratoPronto)
    }
    else {
        console.log(pratoPronto)
    }
}
microondas (1,19)