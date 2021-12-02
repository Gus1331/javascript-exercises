function mudou(){
    this.innerHTML = "mudou";
};
function onn(){
    this.style.backgroundColor = "rgb(118, 27, 179)";
    this.style.border = "3px solid rgba(221, 11, 11, 0.918)"
};

function  load(){
    let clik = document.getElementsByTagName("p")[0];
    clik.addEventListener("click",mudou);
    let btn1 = document.getElementById("btn");
    btn1.addEventListener("mouseover", onn);
};
