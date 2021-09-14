function calculate(){
    var firstNum,secondNum, result, typeOfOperation = 0;
    var flag = false;
    
    while(flag == false){
        if (typeOfOperation > 0 && typeOfOperation < 5){
            flag = true;
        }
        else{
            typeOfOperation = parseInt(prompt("Type of Number"));
        }
        
    }
    firstNum = parseInt(prompt("Enter 1st Number"));
    secondNum = parseInt(prompt("Enter 2nd Number"));

    switch(typeOfOperation){
        case 1:result = add(firstNum,secondNum);break;
        case 2:result = subtract(firstNum,secondNum);break;
        case 3:result = multiply(firstNum,secondNum);break;
        case 4: result = divide(firstNum,secondNum);break;
    }

    alert("result is " +  result);

}

function add(a,b){return a+b;};
function subtract(a,b){return a-b;};
function multiply(a,b){return a*b;};
function divide(a,b){return a/b;};

window.onload = calculate;