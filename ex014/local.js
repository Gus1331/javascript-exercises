// Local storage

// setItem // getItem // removeItem // clear


window.localStorage.setItem("nome", "gus");
localStorage.setItem("idade",34);

let nome = localStorage.getItem("nome");
let idade = localStorage.getItem("idade");
console.log(nome);
console.log(idade);

localStorage.removeItem("idade");
let idadeAtualizada = localStorage.getItem("idade");
console.log(idadeAtualizada);

//localStorage.clear() <- Limpa todos itens