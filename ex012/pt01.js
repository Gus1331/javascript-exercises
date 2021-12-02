//Interatividade com HTML

let click = 0;

let plusclick = function(){
    click++
    cont = document.getElementById("contagem");
    cont.innerText = "Este botão foi clickado "+click+" vezes";
    return 
}

let reset = function(){
    click = 0
    return
}