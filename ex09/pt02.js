// Objetos pt2

var obj = new Object(); // Criando objeto sem propriedades

obj.valor1 = "string1";  // Criando propriedade para objeto e atribuido valor para a mesma



var X = "string2";
obj.valor2 = X;         // Criando propriedade para objeto e atribuindo valor apartir de uma variável

var Y = "valor3";
var Z = "string3";
obj[Y] = Z;             // Criando propriedade apartir de uma variável


console.log(obj);       // Imprimindo objeto no console

/*

Resultado final do objeto (obj):
obj = { 
    valor1: 'string1', 
    valor2: 'string2', 
    valor3: 'string3'
}
*/