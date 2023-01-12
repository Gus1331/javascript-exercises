let alphabet1 = ["a", "b", "c"];
let alphabet2 = ["d", "f", "g"];
let alphabet3 = ["h i j k l m n o p q r s t u v w x y z"];

let alphabet = [...alphabet1, ...alphabet2, alphabet3, "ç"] // copia objetos ou arrays/ adiciona ou cria elementos/ adiciona arrays ou objetos por referencia
alphabet3.push("0123456789")
console.log(alphabet);