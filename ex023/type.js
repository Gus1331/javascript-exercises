let chat = document.getElementById("chat");
let height = 3;
let msg = document.getElementById("msg");
let type = true;

function blink(){
    msg.innerText = "l";
    x = setTimeout( () => {
        msg.innerText = ""
    } , 500);
    switch (type){
        case true:
            setTimeout(blink, 1500);
            break;
            default:
                clearTimeout(x);
                msg.innerText = "";
            break;
    }
}

function newMessage(){
    chat.innerHTML
}