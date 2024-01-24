

const log = console.log;



// ##################################################################################################


// const a = (a, b, c) => {
//     let answer;
//     return answer
// }
// log( a() )






// 최솟값 구하기
// const a = (a, b, c) => {
//     let answer;
//     if(a < b) answer = a;
//     else answer = b;
//     if(c < answer) answer = c; 
//     return answer;
// }
// log( a(3,2, 11) )




// ##################################################################################################


// 삼각형 유무 
// 삼각형이 되려면 큰 막대의 길이가 짧은 막대 2개의 합보다 작아야함

// const a = (a, b, c) => {
//     let answer = 'yes', max;
//     let sum = a + b + c; // 세 길이의 총합

//     if(a > b) max = a;
//     else max = b;
//     if(c > max) max = c;
//     //맥스에 가장 큰수 넣기

//     // 총 길이에서 맥스를 뻄
//     if((sum - max) <= max) answer = 'no';
    

//     return answer
// }
// log( a(6, 7, 11) )







// ##################################################################################################

// 첫번째 줄에 필요한 다스 수를 출력. 한다스 12개
// 12/25 2..24

// const a = (n) => {
//     let answer = Math.ceil(n / 12);
//     return answer
// }
// log( a(25) )



// ##################################################################################################

// 누적
// const a = (n) => {
//     let answer = 0;
//     for(let i = 0; i <= n; i++) {
//         answer = answer + i
//     }
//     return answer
// }
// log( a(6) )


// ##################################################################################################

// 미니멈
// const a = (n) => {
//     let answer;
//     let min = 100;

//     for(let i = 0; i < n.length; i++) {
//         if(n[i] < min) min = n[i]
//     }
//     answer = min;

    

//     return answer
// }
// log( a([5,7,1,3,2,9,11]) )



// ##################################################################################################

// 누적
const a = (n) => {
    let answer;
    let min = 100;

    for(let i = 0; i < n.length; i++) {
        if(n[i] < min) min = n[i]
    }
    answer = min;

    

    return answer
}
log( a([5,7,1,3,2,9,11]) )




