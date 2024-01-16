var a = window.prompt("enter first number");
var b = window.prompt("enter second number");

let num1 = parseInt(a);
console.log('First number' + a)


let num2 = parseInt(b);
console.log('second number' + b)

var sum = num1+num2

console.log(sum);
document.getElementById("sum").innerText = 'Sum: ' + sum;
