// Declaração das Variaveis
let victory = 130
let defeat = 30
let level = ""
let result = ranking(victory, defeat)

//Função de soma
function ranking(victory, defeat){
    let sum = victory - defeat
    return sum
}

//If para descobri o nivel
if (result <= 10){
    level = "Ferro"
}else if (result <= 20){
    level = "Bronze"
}else if (result <= 50){
    level = "Prata"
}else if (result <= 80){
    level = "Ouro"
}else if (result <= 90){
    level = "Diamante"
}else if (result <= 100){
    level = "Lendário"
}else{
    level = "Imortal"
}

//Texto final
console.log("O Herói tem de saldo de "+ victory +" e está no nível de "+ level)