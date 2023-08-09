// function allNumbers(number1, number2) {
//     // console.log(number1 + number2);
//     var totalNumbers = number1 - number2;
//     // console.log(totalNumbers);
//     return totalNumbers;
// }

// var result = allNumbers(9, 11);
// console.log('total: ', result);



function getAverage(a1, a2, a3) {
    const total = a1 + a2 + a3;
    const average = total / 3;
    return average;
}
const marks1 = 60;
const marks2 = 52;
const marks3 = 58;

var myAverage = getAverage(marks1, marks2, marks3);
console.log(myAverage)