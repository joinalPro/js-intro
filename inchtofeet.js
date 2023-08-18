// const myInches = 12;
// const myFeet = myInches / 12;
// console.log('total feet', myFeet)

//function for muliple use

function inchToFeet (inches){
    const feet = inches / 12;
    return feet;
}
const dataInches = 144;
const dataFeet = inchToFeet (dataInches);

console.log(dataFeet);

//miles to kilometer convert
function milesToKilo (miles){
    const kilometer = miles * 1.609;
    return kilometer;
}

const yourMiles = 44;
const totalKilometer = milesToKilo(yourMiles);
console.log(totalKilometer);