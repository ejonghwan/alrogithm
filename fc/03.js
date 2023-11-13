
        //2진수 
        let result = '';
        let x = 11;
        while(true) {
            if(x === 1 || x === 0) {
                result += String(x)
                break
            }
            if(x % 2 === 0) {
                result += '0'
            } else {
                result += '1'
            }
            x = Math.floor(x / 2)
            console.log(x)
        }
        console.log(Array.from(result).reverse().join(''))


        function recursion(n) {
            if(n === 1 || n === 0) {
                return n
            }
            let nn = n % 2 === 0 ? '0' : '1' 
            return recursion(Math.floor(n / 2)) + nn
        }
        console.log(recursion(11))


        

        // var arr = [10, 3, 5, 11, 50, 35, 30, 42]

        // // g1 한갈래 
        // // g2 한갈래 계속 2개씩 
        
        // function b(arr1) {
        //     var len = arr1.length
        //     var result = []
        //     if(len <= 1) {
        //         return arr1
        //     }

        //     var middle = parseInt(len/2)
        //     var g1 = b(arr1.slice(0, middle))
        //     var g2 = b(arr1.slice(middle, ))
            

        //     while(g1.length !== 0 && g2.length !== 0) {
        //         if(g1[0] < g2[0]) {
        //             result.push(g1.shift())
        //         } else {
        //             result.push(g2.shift())
        //         }
        //     }

        //     while(g1.length !== 0) {
        //         result.push(g1.shift())
        //     }

        //     while(g2.length !== 0) {
        //         result.push(g2.shift())
        //     }



        //     // return `g1: ${g1} / g2: ${g2} \n` 
        //     return result

        // }

        // console.log(b(arr))


          
        var arr = [10, 3, 5, 11, 50, 7, 35, 23, 30, 42]

        /* 
            [10, 3, 5, 11, 50, 35, 30, 42]

            
            
        */ 

        function ba(array) {
            let max = array.length;
            if(max <= 1) {
                return array;
            }

            let fibo = [array.shift()]
            let g1 = []
            let g2 = []

            for(let i in array) {
                if(array[i] < fibo) {
                    g1.push(array[i])
                } else {
                    g2.push(array[i])
                }
            }

            return ba(g1).concat(fibo, ba(g2))
        }

        console.log(ba(arr))




        // function solution(n){  
        //     let answer=0;
        //     let dy=Array.from({length:n+1}, ()=>0);
        //     dy[1]=1;
        //     dy[2]=2;
        //     for(let i=3; i<=n; i++){
        //         dy[i]=dy[i-2]+dy[i-1];
        //     }
        //     answer=dy[n];
        //     return answer;
        // }

        // console.log(solution(7));


        function solution(n){  
            let answer=0;
            let dy=Array.from({length:n+2}, ()=>0);
            dy[1]=1;
            dy[2]=2;
            for(let i=3; i<=n+1; i++){
                dy[i]=dy[i-2]+dy[i-1];
            }
            answer=dy[n+1];
            return answer;
        }

        console.log(solution(7));