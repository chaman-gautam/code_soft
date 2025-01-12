let add = document.getElementsByClassName(".addition");
let sub = document.getElementsByClassName(".subtraction");
let operators = document.querySelectorAll(".operator");
let button_number = document.querySelectorAll(".button_number");
let number = document.querySelectorAll(".number");
let display_data = document.querySelector(".display-data");
let equal = document.querySelector(".equal");
let AC = document.querySelector(".clear_all");
let backspace = document.querySelector(".back_space");


var operator = null;
var num1 = null;
var num2 = null;

function check_operator(button1) {
    let i = 0;
    while (i < operators.length) {
        if (button1 == operators[i].innerText) {
            return operators[i].innerText;
        }
        i++;
    }
    return null;
}

button_number.forEach((button1) => {
    button1.addEventListener('click', () => {
        if (button1.innerText == check_operator(button1.innerText)) {
            // console.log(button1.innerText);
            num1 = Number(display_data.innerText);
            // console.log(num1);
            operator = button1.innerText;
            display_data.innerText = button1.innerText;
        }
        else {
            // console.log(button1.innerText);

            if (display_data.innerText == 0 || display_data.innerText == check_operator(display_data.innerText)) {

                display_data.innerText = button1.innerText;

            }

            else {


                display_data.innerText = display_data.innerText + button1.innerText;
                // console.log("data");
            }


        }

        num2 = Number(display_data.innerText);
        // console.log("the num2 is ", num2);










    })
})


// functions for calculation

//addition 
function addition(num1,num2){
    return num1+num2;
}
// subtraction 
function subtraction(num1,num2){
    return num1-num2;
}
//division 
function multiplication(num1,num2){
    return num1*num2;
}
// multiplication
function division(num1,num2){
    if (num2 != 0) {
        return num1 / num2;
    } else {
       display_data.innerText="cannot divide by zero";
    };
}
//modulas
function modulas(num1,num2){
    return num1%num2;
}


function claculating(operator) {
    if (operator == '+') {
        // console.log("addtion");
      let result=  addition(num1, num2);
        display_data.innerText=result;

    }
    else if (operator == '-') {
        // console.log("subtraction");
        let result=subtraction(num1, num2);
        display_data.innerText=result;

    }
    else if (operator == '*') {
        // console.log("multiplication");
        let result=multiplication(num1, num2);
        display_data.innerText=result;

    }
    else if (operator == '/') {
        // console.log("division");
      let result=  division(num1, num2);
        display_data.innerText=result;
    }
    else if (operator == '%') {
        // console.log("modulas");
     let result=   modulas(num1, num2);
        display_data.innerText=result;
    }
    else {
        display_data.innerText = "wrong input ";
    }
}




equal.addEventListener('click', () => {
    claculating(operator);
})

AC.addEventListener('click', () => {
    display_data.innerText = 0;
    num1=null;
    num2=null;
    operator=null;
});
backspace.addEventListener('click', () => {
    // Remove the last character from the display
    display_data.innerText = display_data.innerText.slice(0, -1) || '0';

    // Update num1 or num2 based on the current operator state
    if (operator === null) {
        num1 = Number(display_data.innerText);
    } else {
        num2 = Number(display_data.innerText);
    }
});

