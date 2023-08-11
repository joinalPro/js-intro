function getAverage (as1, as2, as3){
    const total = as1 + as2 + as3;
    const average = total / 3;
    return average;
}

const as1Marks = 60;
const as2Marks = 58;
const as3Marks = 55;

var myAverage = getAverage(as1Marks, as2Marks, as3Marks)
console.log(myAverage);             