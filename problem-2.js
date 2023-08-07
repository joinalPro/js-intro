// if else mark problem
// var your = 85;
// var tom = 66;
// var jane = 95;
// var peter = 56;
// var john = 40;

// 80 or above A grade
// 60 or above B grade
// 50 or above c grade
// 40 or above d grade
// 39 or less  f grade

var marks;
if (marks > 80) {
    console.log('You got A Grade');
    marks = prompt('Enter your marks: ')
} else if (marks > 60) {
    console.log('B Grade')
} else if (marks > 50) {
    console.log('c grade')
}else if (marks > 40) {
    console.log('d grade')
} else if (marks < 39) {
    console.log(' You failed')
}