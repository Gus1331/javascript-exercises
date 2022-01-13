



let body = document.getElementById("body");
let h1 = document.getElementById("h1");
let button1 = document.getElementById("bt1");
let button2 = document.getElementById("bt2");

function start(){
    red();
    rainbow = setInterval(red,3000);
    button1.style.display = "none";
    button2.style.display = "inline-block";
}
function stop(){
    clearInterval(rainbow);
    button1.style.display = "inline-block";
    button2.style.display = "none";
}

function red(){
    body.style.backgroundColor = "red" ;
    setTimeout(green,1000);
    }
function green(){
    body.style.backgroundColor = "green";
    setTimeout(blue,1000);
}
function blue(){
    body.style.backgroundColor = "blue";
}

