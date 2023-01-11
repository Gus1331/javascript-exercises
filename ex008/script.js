/*
        Objetivo:
    Fazer um sistema que leia dados de arrays(nomes, salarios, cargos) e ->
mostre no console, todos dados referente á todos funcionários + bônus.

    *(Bonûs: salários <= 2000 recebem bônus de 35%
             salários <= 4000 recebem bônus de 20%
             salários >= 4001 recebem bônus de 04%
    )
*/

//Primeiro as variaveis (simulando que estão vindo de um banco de dados)
var nomes = [
    "Alex J.",
    "Miles M.",
    "Peter B.",
    "Michele J."
];
var salarios = [
    "3260",
    "13090",
    "1530",
    "2750"
];
var cargos = [
    "Chefe de cozinha",
    "Eletricista",
    "Fotógrafo",
    "Jornalista"
];

var bonus = 0;//variavel para receber o valor com bônus de cada funcionário


//Função para colcular bônus
function calculo(x){
    if (x <= 2000)
        return x*0.35;
    else if (x <= 4000)
        return x*0.18;
    else
        return x*0.04;
}


//Mostrando todos dados + calculo do bônus
for(var i in nomes){
    bonus = calculo(salarios[i]);//aqui eu chamo a função calculo e dou o valor dos salários
    console.log("Nome: "+ nomes[i]+" |Cargo: "+cargos[i]+" |Salário: "+salarios[i]+"R$ |Bonûs: "+bonus+"R$");
}
console.log("\nFim...")