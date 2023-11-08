
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


        