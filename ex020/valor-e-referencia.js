let userList0 = ["Hopper", "Dan", "Trisha", "Carol"];
let userList1;
let userList2;
let userList3;

let userData0 = {Hopper: 35, Dan: 16, Trisha: 24, Carol: 30};
let userData1;
let userData2;
let userData3;

//      ARRAYS
userList1 = userList0; //ao invés de pegar seus valores, aqui só se passa a referência
userList1.push("Luna");//como esta array possui uma referencia, aqui estemos alterando o valor da array original
console.log(userList0);//observamos que "Luna foi adicionada a este array também"

userList2 = userList0.slice();//com este metodo, usamos parte do array original, mas como não foi passado nenhum valor, copiamos o conteudo do array original
userList3 = [...userList0];//desta forma também copiamos o conteudo da original
userList2.push("John");
userList3.push("Mia");


console.log("0",userList0, "\n 2", userList2, "\n 3", userList3); // observamos que não alteramos o array original ao colocar valores no list 1 e 2


//      OBJETOS
userData1 = userData0; //passamos como referência
userData1.Luna = 17; //alteramos o objeto referencia
console.log(userData0);

userData2 = Object.assign({},userData0); //primeira forma de copiar valores
userData3 = {...userData0}; //segunda forma
userData2["John"] = 31;
userData3["Mia"] = 28;

console.log("0", userData0, "\n 2", userData2, "\n 3", userData3);//conclusão


