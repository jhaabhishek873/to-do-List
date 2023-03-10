var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputlen(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li);
    input.value= "";
}

function addListafterClick() {
    if(inputlen() >0){
        createListElement();
    }
}
function addListafterKeypress(event){
    if(inputlen() >0 && event.keyCode === 13){
        createListElement();
    }
}
button.addEventListener("click", addListafterClick)

input.addEventListener("keypress",addListafterKeypress)
