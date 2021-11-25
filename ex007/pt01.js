//Funções pt1

var Z = 0

function conta (X,Y){
    console.log("A soma de "+X+" com "+Y+" é "+ (X + Y));
    Z++
    return conta
}

var set1 = conta(10,15);
var set2 = conta(40,23);
var set3 = conta(13,26);
var set4 = conta(70,16);

console.log(Z+" Contas realizadas com sucesso\n");
console.log("FIM...");
