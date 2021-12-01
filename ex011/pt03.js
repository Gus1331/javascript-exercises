//Modificando elementos do HTML em JS

let adv =   document.getElementById("adv"); // Pegando elementos e colocando em 'let'
let lor =   document.getElementById("lor");

lor.innerHTML = 'Hello World!! <span id="spn">Testes teste </span class="str"><strong>class</strong>';  // Modificando todo paragrafo#lor
let spn =   document.getElementById("spn");
let str =   document.getElementsByClassName("str");

adv.style.backgroundImage = "linear-gradient(to right, red, blue)";
lor.style = "background-color:red";     //Modificando fundo do paragrafo#lor
spn.style = "font-size: 30px";  // Modificando tamanho do span
str.className = "";     // Tirando o class do elemento