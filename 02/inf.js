

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





//핵심!
// 첫번째 인자 fn을 받는 것 자체가 특정 구간에서 그 함수를 실행하고
// fn(acc, a) 특정 값자체를 위임해줘서 함수에 전달해줌.
// 그 실행한 값을 acc에 담아 최종적으로 acc를 리턴해줌.

const _reduce = (...args) => {
    let [ fn, acc, iter ] = args;
    if(args.length === 2) {
        iter = iter[Symbol.iterator]();
        acc = iter.next().value;
    }

    for(const a of iter) {
        acc = fn(acc, a) //함수실행할때 acc누적값과 a를 다 넘김. 그걸 acc에 담음
    }

    return acc;
}


const arr = [{ name: 'aa', age: 30 }, { name: 'bb', age: 40 }, { name: 'cc', age: 50 }, { name: 'dd', age: 60 }, ]
// _reduce((acc, list) => {}, arr, arr )

const _go = (a, ...fs) => _reduce((a, f) => f(a), a, fs);

console.log(
    _go(
        arr,
        x => x.filter(t => t.age > 50)
    )
)



