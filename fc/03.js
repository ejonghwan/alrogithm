
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


        // function solution(n){  
        //     let answer=0;
        //     let dy=Array.from({length:n+2}, ()=>0);
        //     dy[1]=1;
        //     dy[2]=2;
        //     for(let i=3; i<=n+1; i++){
        //         dy[i]=dy[i-2]+dy[i-1];
        //     }
        //     answer=dy[n+1];
        //     return answer;
        // }

        // console.log(solution(7));




        // function solution(n, arr){
        //     let answer, max=Number.MIN_SAFE_INTEGER;
        //     for(let x of arr){
        //         let sum=0, tmp=x;
        //         while(tmp){
        //             sum+=(tmp%10);
        //             tmp=Math.floor(tmp/10);
        //         }
        //         if(sum>max){
        //             max=sum;
        //             answer=x;
        //         }
        //         else if(sum===max){
        //             if(x>answer) answer=x;
        //         }
        //     }
        //     return answer;
        // }
        
        // let arr=[128, 460, 603, 40, 521, 137, 123];
        // console.log(solution(7, arr));


        // function solution(m, coin){  
        //     let answer=0;
        //     let dy=Array.from({length:m+1}, ()=>1000);
        //     dy[0]=0;
        //     for(let i=1; i<arr.length; i++){
        //         for(let j=coin[i]; j<=m; j++){
        //             dy[j]=Math.min(dy[j], dy[j-coin[i]]+1);
        //         }
        //     }
        //     answer=dy[m];
        //     return answer;
        // }

        // let arr=[1, 2, 5];
        // console.log(solution(15, arr));


        // function solution(arr){  
        //     let answer=0;
        //     let dy=Array.from({length:arr.length}, ()=>0);
        //     dy[0]=1;
        //     for(let i=1; i<arr.length; i++){
        //         let max=0;
        //         for(let j=i-1; j>=0; j--){
        //             if(arr[j]<arr[i] && dy[j]>max){
        //                 max=dy[j];
        //             }
        //         }
        //         dy[i]=max+1;
        //         answer=Math.max(answer, dy[i]);
        //     }
        //     return answer;
        // }

        // let arr=[5, 3, 7, 8, 6, 2, 9, 4];
        // console.log(solution(arr));
        


        // function solution(board){  
        //     let answer=0;
        //     let n=board.length;
        //     let dx=[-1, -1, 0, 1, 1, 1, 0, -1];
        //     let dy=[0, 1, 1, 1, 0, -1, -1, -1];
        //     function DFS(x, y){
        //        board[x][y]=0;
        //        for(let k=0; k<8; k++){
        //            let nx=x+dx[k];
        //            let ny=y+dy[k];
        //            if(nx>=0 && nx<n && ny>=0 && ny<n && board[nx][ny]===1){
        //                DFS(nx, ny);
        //            }
        //        } 
        //     }
        //     for(let i=0; i<n; i++){
        //         for(let j=0; j<n; j++){
        //             if(board[i][j]===1){
        //                 board[i][j]=0;
        //                 answer++;
        //                 DFS(i, j);
        //             }
        //         }
        //     }
        //     return answer;
        // }

        // let arr=[[1, 1, 0, 0, 0, 1, 0], 
        //          [0, 1, 1, 0, 1, 1, 0],
        //          [0, 1, 0, 0, 0, 0, 0],
        //          [0, 0, 0, 1, 0, 1, 1],
        //          [1, 1, 0, 1, 1, 0, 0],
        //          [1, 0, 0, 0, 1, 0, 0],
        //          [1, 0, 1, 0, 1, 0, 0]];

        // console.log(solution(arr));



        // 최대 점수 구하기 
        // function solution(m, ps, pt){         
        //     let answer=Number.MIN_SAFE_INTEGER;
        //     let n=ps.length;
        //     function DFS(L, sum, time){
        //         if(time>m) return;
        //         if(L===n){
        //             answer=Math.max(answer, sum);
        //         }
        //         else{
        //             DFS(L+1, sum+ps[L], time+pt[L]);
        //             DFS(L+1, sum, time);
        //         }   
        //     }

        //     DFS(0, 0, 0);
        //     return answer;
        // }

        // let ps=[10, 25, 15, 6, 7];
        // let pt=[5, 12, 8, 3, 4]
        // console.log(solution(20, ps, pt));



            // function solution(n){
            //     let answer="";
            //     function DFS(v){
            //         if(v>7) return;
            //         else{
            //             answer+=(v+' ');
            //             DFS(v*2);
            //             DFS(v*2+1);
            //         }
            //     }
            //     DFS(n);
            //     return answer;
            // }

            // console.log(solution(1));

        
            // function solution(s){  
            //     let answer;
            //     let sH = new Map();
            //     for(let x of s){
            //         if(sH.has(x)) sH.set(x, sH.get(x)+1);
            //         else sH.set(x, 1);
            //     }
            //     let max=Number.MIN_SAFE_INTEGER;
            //     for(let [key, val] of sH){
            //         if(val>max){
            //             max=val;
            //             answer=key;
            //         }
            //     }
            //     return answer;
            // }

            // let str="BACBACCACCBDEDE";
            // console.log(solution(str));


            // function solution(arr){
            //     let answer=[];
            //     let sortArr=arr.slice();
            //     sortArr.sort((a, b)=>a-b);
            //     for(let i=0; i<arr.length; i++){
            //         if(arr[i]!==sortArr[i]) answer.push(i+1);
            //     }
            //     return answer;
            // }

            // let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
            // console.log(solution(arr));


            // function solution(n, arr){
            //     let answer, max=Number.MIN_SAFE_INTEGER;
            //     for(let x of arr){
            //         let sum=0, tmp=x;
            //         while(tmp){
            //             sum+=(tmp%10);
            //             tmp=Math.floor(tmp/10);
            //         }
            //         if(sum>max){
            //             max=sum;
            //             answer=x;
            //         }
            //         else if(sum===max){
            //             if(x>answer) answer=x;
            //         }
            //     }
            //     return answer;
            // }
            
            // let arr=[128, 460, 603, 40, 521, 137, 123];
            // console.log(solution(7, arr));


            

            // function solution(s, e){  
            //     let answer=0;
            //     let ch=Array.from({length:10001}, ()=>0);
            //     let queue=[];
            //     queue.push(s);
            //     ch[s]=1;
            //     let L=0;
            //     while(queue.length){
            //         let len=queue.length;
            //         for(let i=0; i<len; i++){
            //             let x=queue.shift();
            //             for(let nx of [x-1, x+1, x+5]){
            //                 if(nx===e) return L+1;
            //                 if(nx>0 && nx<=10000 && ch[nx]===0){
            //                     ch[nx]=1;
            //                     queue.push(nx);
            //                 }
            //             }
            //         }
            //         L++;
            //     }
            //     return answer;
            // }

            // console.log(solution(5, 14));


            // function solution(k, arr){
            //     let answer, sum=0;
            //     for(let i=0; i<k; i++) sum+=arr[i];
            //     answer=sum;
            //     for(let i=k; i<arr.length; i++){
            //         sum+=(arr[i]-arr[i-k]);
            //         answer=Math.max(answer, sum);
            //     }                    
            //     return answer;
            // }
            
            // let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
            // console.log(solution(3, a));

            // /장난꾸러기
            // function solution(arr){
            //     let answer=[];
            //     let sortArr=arr.slice();
            //     sortArr.sort((a, b)=>a-b);
            //     for(let i=0; i<arr.length; i++){
            //         if(arr[i]!==sortArr[i]) answer.push(i+1);
            //     }
            //     return answer;
            // }

            // let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
            // console.log(solution(arr));
            


            // 가장짧은 거리 
            // function solution(s, t){
            //     let answer=[];
            //     let p=1000;
            //     for(let x of s){
            //         if(x===t){
            //             p=0;
            //             answer.push(p);
            //         }
            //         else{
            //             p++;
            //             answer.push(p);
            //         }
            //     }
            //     p=1000;
            //     for(let i=s.length-1; i>=0; i--){
            //         if(s[i]===t) p=0;
            //         else{
            //             p++;
            //             answer[i]=Math.min(answer[i], p);
            //         }
            //     }
            //     return answer;
            // }
            
            // let str="teachermode";
            // console.log(solution(str, 'e'));


        // 이진트리 순회 DFS
            // function solution(n){
            //     let answer="";
            //     function DFS(v){
            //         if(v>7) return;
            //         else{
            //             answer+=(v+' ');
            //             DFS(v*2);
            //             DFS(v*2+1);
            //         }
            //     }
            //     DFS(n);
            //     return answer;
            // }

            // console.log(solution(1));


        // 공주 구하기
            // function solution(n, k){
            //     let answer;
            //     let queue=Array.from({length:n}, (v, i)=>i+1); 
            //     while(queue.length){
            //         for(let i=1; i<k; i++) queue.push(queue.shift());
            //         queue.shift();
            //         if(queue.length===1) answer=queue.shift();
            //     }  
            //     return answer;
            // }

            // console.log(solution(8, 3));
            

            // function solution(str){
            //     let answer="";
            //     for(let x of str){
            //         if(!isNaN(x)) answer+=x;
            //     }  
            //     return parseInt(answer);
            // }
            
            // let str="g0en2T0s8eSoft";
            // console.log(solution(str));



            // 최대매출
            // function solution(k, arr){
            //     let answer, sum=0;
            //     for(let i=0; i<k; i++) sum+=arr[i];
            //     answer=sum;
            //     for(let i=k; i<arr.length; i++){
            //         sum+=(arr[i]-arr[i-k]);
            //         answer=Math.max(answer, sum);
            //     }                    
            //     return answer;
            // }
            
            // let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
            // console.log(solution(3, a));


            // // 공주구하기
            // function solution(s){  
            //     let answer;
            //     let stack=[];
            //     for(let x of s){
            //         if(x===')'){
            //             while(stack.pop()!=='(');
            //         }
            //         else stack.push(x);
            //     }
            //     answer=stack.join('');
            //     return answer;
            // }

            // let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
            // console.log(solution(str));

            
            // 졸업선물
            // function solution(m, product){
            //     let answer=0;
            //     let n=product.length;
            //     product.sort((a, b)=>(a[0]+a[1])-(b[0]+b[1]));
            //     for(let i=0; i<n; i++){
            //         let money=m-(product[i][0]/2+product[i][1]);
            //         let cnt=1;
            //         for(let j=0; j<n; j++){
            //             if(j!==i && (product[j][0]+product[j][1])>money) break;
            //             if(j!==i && (product[j][0]+product[j][1])<=money){
            //                 money-=(product[j][0]+product[j][1]);
            //                 cnt++;
            //             }
            //         }
            //         answer=Math.max(answer, cnt);
            //     }  
            //     return answer;
            // }
            
            // let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
            // console.log(solution(28, arr));
            


            // 보이는 학생
            // function solution(arr){         
            //     let answer=1, max=arr[0];
            //     for(let i=1; i<arr.length; i++){
            //         if(arr[i]>max){
            //             answer++;
            //             max=arr[i];
            //         }
            //     }
            //     return answer;
            // }

            // let arr=[130, 135, 148, 140, 145, 150, 150, 153];
            // console.log(solution(arr));


            // 쇠막대기
            // function solution(s){
            //     let answer=0;
            //     let stack=[];
            //     for(let i=0; i<s.length; i++){
            //         if(s[i]==='(') stack.push('(');
            //         else{
            //             stack.pop(); 
            //             if(s[i-1]==='(') answer+=stack.length;
            //             else answer++;
            //             //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
            //         }
            //     }                          
            //     return answer;
            // }
            
            // let a="()(((()())(())()))(())";
            // console.log(solution(a));


            // 쇠막대기
            // function solution(n){
            //     let answer=[];
            //     let ch=Array.from({length:n+1}, ()=>0);
            //     function DFS(L){
            //         if(L===n+1){
            //             let tmp="";
            //             for(let i=1; i<=n; i++){
            //                 if(ch[i]===1) tmp+=(i+" ");
            //             }
            //             if(tmp.length>0) answer.push(tmp.trim());
            //         }
            //         else{
            //             ch[L]=1;
            //             DFS(L+1);
            //             ch[L]=0;
            //             DFS(L+1);
            //         }
            //     }
            //     DFS(1);
            //     return answer;
            // }

            // console.log(solution(3));

            // 10부제 
            // function solution(day, arr){
            //     let answer=0;
            //     for(let x of arr){
            //         if(x%10==day) answer++;
            //     }
                
            //     return answer;
            // }
            
            // arr=[25, 23, 11, 47, 53, 17, 33];
            // console.log(solution(3, arr));



            // 보이는 학생
            // function solution(arr){         
            //     let answer=1, max=arr[0];
            //     for(let i=1; i<arr.length; i++){
            //         if(arr[i]>max){
            //             answer++;
            //             max=arr[i];
            //         }
            //     }
            //     return answer;
            // }

            // let arr=[130, 135, 148, 140, 145, 150, 150, 153];
            // console.log(solution(arr));

            // function solution(arr){         
            //     let answer=1, max=arr[0];
            //     for(let i=1; i<arr.length; i++){
            //         if(arr[i]>max){
            //             answer++;
            //             max=arr[i];
            //         }
            //     }
            //     return answer;
            // }

            // let arr=[130, 135, 148, 140, 145, 150, 150, 153];
            // console.log(solution(arr));

        // 멘토링
            // function solution(test){
            //     let answer=0;
            //     m=test.length;
            //     n=test[0].length;
            //     for(let i=1; i<=n; i++){
            //         for(let j=1; j<=n; j++){
            //             let cnt=0;
            //             for(let k=0; k<m; k++){
            //                 let pi=pj=0;
            //                 for(let s=0; s<n; s++){
            //                     if(test[k][s]===i) pi=s;
            //                     if(test[k][s]===j) pj=s;
            //                 }
            //                 if(pi<pj) cnt++;
            //             }
            //             if(cnt===m) answer++;
            //         }
            //     }
            //     return answer;
            // }
            
            // let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
            // console.log(solution(arr));


            // 합이 같은 부분 집함
            function solution(arr){
                let answer="NO", flag=0;
                let total=arr.reduce((a, b)=>a+b, 0);
                let n=arr.length;
                function DFS(L, sum){
                    if(flag) return;
                    if(L===n){
                        if((total-sum)===sum){
                            answer="YES";
                            flag=1;
                        }
                    }
                    else{
                        DFS(L+1, sum+arr[L]);
                        DFS(L+1, sum);
                    }
                }
                DFS(0, 0);
                return answer;
            }

            let arr=[1, 3, 5, 6, 7, 10];
            console.log(solution(arr));
