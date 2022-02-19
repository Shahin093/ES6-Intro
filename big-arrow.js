// sum 
const sum = (num1, num2) => num1 + num2;
console.log(sum(21, 21));
// multiply 
const multiply = (num1, num2, num3) => num1 * num2 * num3;
console.log(multiply(2, 2, 2));

const tenTimes = num => num * 5;
console.log(tenTimes(10));

const getName = () => 'shidul islam';
console.log(getName());

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
console.log(doMath(12, 5));
