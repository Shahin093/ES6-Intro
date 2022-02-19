const number = 100000;
let fullName = "Shidul Islam";

// default parameter 
function calculate(x, y, z = 0) {
}
function getName(first, last = 'chowdhury') {
    return first + ' ' + last;
}
//templete string 
const myPeople = `this is lin one 
this is line two
this is line three ${number} ${getName('Mitu')} my name is ${fullName}`;
console.log(myPeople);

// arrow funciton 
const getName2 = (first, last = '') => first + ' ' + last;
console.log(getName2('Mitu', 'Chowdhuri'));

const fiveTimes = x => x * 5;
console.log(fiveTimes(40));

const bigArrowFUnc = (x, y, z) => {
    //
    //
    //return .......
}
console.log(bigArrowFUnc(0, 0, 0));

// spread oparator 
const number = [3, 5, 7, 3, 9, 3, 6, 2];
const min = math.min(...number);
