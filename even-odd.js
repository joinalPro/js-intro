// 2 deya bag korle bag shesh 0 hole even

// console.log(40%2);
// console.log(98%2);
// console.log(144%2);
// console.log(1286%2);

// console.log(7%2);

function isEven (number){
    const remainder = number % 2;
    if (remainder === 0){
            return true;
    }
    else{
       return false;
    }
}

const myNumber = isEven(303);
console.log(myNumber);
const herNumber = isEven(1280);
console.log(herNumber);