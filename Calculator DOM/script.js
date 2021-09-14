let textFields = document.getElementsByTagName("input");
let resultingNumber = document.getElementById("pResult");
let button = document.getElementsByTagName("button");
let texts = document.getElementsByTagName("p");
let activityTitle = document.getElementById("activityTitle");


addListenersToButtons();

function addListenersToButtons(){
    button[0].addEventListener("click", changeTheme);
    button[1].addEventListener("click", addNumbers);
    button[2].addEventListener("click", subtractNumbers);
    button[3].addEventListener("click", multiplyNumbers);
    button[4].addEventListener("click", divideNumbers);
}

function addNumbers(){
    resultingNumber.innerText = parseFloat(textFields[0].value) + parseFloat(textFields[1].value);
}
function subtractNumbers(){
    resultingNumber.innerText = parseFloat(textFields[0].value) - parseFloat(textFields[1].value);
}
function divideNumbers(){
    resultingNumber.innerText = parseFloat(textFields[0].value) / parseFloat(textFields[1].value);
}
function multiplyNumbers(){
    resultingNumber.innerText = parseFloat(textFields[0].value) * parseFloat(textFields[1].value);
}

function changeTheme(){
    let themeButton = document.getElementById("themeButton");
    let body = document.getElementById("body");

    //FALSE IF CLICKED MEANS TO DARK MODE
    if(themeButton.ariaPressed == "false"){
        body.classList.replace("bg-white", "bg-dark");
        changeTextForLight();
    }
    else{
        body.classList.replace("bg-dark", "bg-white");
        changeTextToDark();
    }
}

function changeTextForLight(){
    for( var i = 0; i < texts.length; i++){
        texts[i].classList.replace("text-black", "text-white");
    }
    activityTitle.classList.replace("text-black", "text-primary");
    button[0].innerText = "Light Mode";
    button[0].style.backgroundColor = "White";
    button[0].style.color = "Black";


}

function changeTextToDark(){
    for( var i = 0; i < texts.length; i++){
        texts[i].classList.replace("text-white", "text-black");
    }
    activityTitle.classList.replace("text-primary", "text-black");
    button[0].innerText = "Dark Mode";
    button[0].style.backgroundColor = "Black";
    button[0].style.color = "White";
}