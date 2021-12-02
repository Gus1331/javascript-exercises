


mouseOn = function(element){
    element.style.backgroundColor = "gray"
    element.style.color = "white"
    element.style.border = "4px solid rgb(97, 97, 97)"
    element.style.backgroundImage = "none"
    element.style.boxShadow = "0 3px 5px rgba(0,0,0,0.4)"
}

mouseOut = function(element){
    element.style.backgroundColor = "rgb(184, 184, 184)" 
    element.style.color = "rgb(114, 114, 114)"
    element.style.border = "2px solid rgb(77, 77, 77)"
    element.style.boxShadow = "none"
}