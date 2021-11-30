// Var Let Const Push


{
    var n1 = 1;
    let n2 = 2;
    const n3 = 3;
}

console.log(n1);
// console.log(n2);     <- Não funciona pois são variáveis locais
// console.log(n3);     <- Não funciona pois são variáveis locais

{
    let n2 = 2.2
    const n3 = 3.3

    console.log(n2);
    console.log(n3);
}

const n4 = [10];
// n4 = 11      <- Impossivel retirar um valor de uma const, porém é possivel modifica-la
n4.push(12);  //<- Adicionando valor em um array existente
console.log("\n"+n4);