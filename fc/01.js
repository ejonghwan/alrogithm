
// 복붙??
https://www.acmicpc.net/submit/10869

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[0].split(' ');

let a = parseInt(line[0]);
let b = parseInt(line[1]);

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(parseInt(a / b))
console.log(a & b)








let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(parseInt(a / b))
console.log(a % b)






let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


let a = input[0]
let b = input[1]


x_1 = b[2]
x_2 = b[1]
x_3 = b[0]


console.log(Number(a) * Number(x_1))
console.log(Number(a) * Number(x_2))
console.log(Number(a) * Number(x_3))
console.log(Number(a) * Number(b))

