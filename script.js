let a = 0;
let b = 0;
let operator = "";

let input1 = parseInt(prompt("Enter"));
a = input1;

let input2 = parseInt(prompt("Enter"));
b = input2;

let input3 = prompt("Enter");
operator = input3;

let result = 0;

while (true) {
    
    let input4 = prompt("Enter");
    finalizer = input4;


    if (operator === "+") {
        result = a + b;
        console.log(result)
    }

    else if (operator === "-") {
        result = a - b;
        console.log(result)
    }

    else if (operator === "*" || operator === "x" || operator === "X") {
        result = a * b;
        console.log(result)
    }

    else if (operator === "/") {
        result = a / b;
        console.log(result)
    }

    else {
        alert("Enter a valid operator/symbol");
        break;
    }

    if (finalizer === "="){
        console.log(result)
        break;
    }

    a=result;
    operator=finalizer;
    
    input2 = parseInt(prompt("Enter"));
}


