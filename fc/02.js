let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[0].split(' ');

let a = parseInt(line[0]);

if(a >= 90) console.log('A')
else if(a >= 80 && a <= 89) console.log('B')
else if(a >= 70 && a <= 79) console.log('C')
else if(a >= 60 && a <= 69) console.log('D')
else console.log('F')





let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[0].split(' ');

let a = parseInt(line[0]);
let b = parseInt(line[1]);

const mmax = 60;
const calc = mmax - (Math.abs(Number(b) - 45));
let aa = null;
let bb = null;

// if(b >= 45) {
//     aa = a; 
//     bb = calc;
// } else {
//     if(a === 0) aa = 23;
//     else aa = Number(a) - 1; 
//     bb = calc
// }

if(b < 45) {
    aa = a - 1;
    bb = b + 15;
    if(a < 0) aa = 23;
} else {
    aa = b - 45;
}

console.log(aa + " " + bb)


// 결과는 같은데 틀렸다고 나오네 ? 
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[0].split(' ');

let a = parseInt(line[0]);
let b = parseInt(line[1]);


if(b < 45) {
    a -= 1;
    b += 15;
    if(a < 0) a = 23;
} else {
    b -= 45;
}

console.log(a + " " + b)






//////////////////////////////////////

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b] = input[0].split('').map(Number);
let c = number(input[1]);

let totalMinute = a * 60 + b+ c;// 분의 형태로
totalMinute %= 1440;

let hour = parseInt(totalMinute / 60)
let minute = totalMinute % 60
console.log(hour + " " + minute)
