// Condicionais switch/case

var stars = 3;


switch (stars){//abre o bloco de comandos
    case 5://prevê resultado da variavel e executa comandos a seguir se verdadeiro
        console.log("Cinco estrelas :)");
        break;//impede de ler e executar outros case, se verdadeiro
    case 4:
        console.log("Quatro estrelas");
        break;
    case 3:
        console.log("Três estrelas");
        break;
    case 2:
        console.log("Duas estrelas");
        break;
    case 1:
        console.log("Uma estrela :(");
        break;
    default:
        console.log("Houve algum erro");
        break;
}