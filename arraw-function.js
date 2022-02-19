// function declare 
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(12, 14));

// function expression 
const add2 = function add2(num1, num2) {
    return num1 + num2;
}
console.log(add2(15, 17));
// funciton expression ( anonymous)
const add3 = function (num1, num2) {
    return num1 + num2;
}
console.log(add3(15, 17));
// arraw Function 
const add4 = (num1, num2) => num1 + num2;
console.log(add4(15, 15));

// document.getElementById('my-btn').onclick = function handleEvent(){}
