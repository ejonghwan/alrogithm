import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import readline from 'readline';

const app = express();
const port = 4000;
const __filename = fileURLToPath(import.meta.url);

const re = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

app.listen(port, () => {
    console.log('app listen!');
    const testfile = fs.readFileSync(`${dirname(__filename)}/txt/test.txt`, { encoding: 'utf-8', flag: 'r' })
    console.log('??', testfile)

    re.on('line', line => {
        // 콘솔창에서 줄바꿈할때마다 호출
        input.push(line)
    }).on('close', () => {
        // 콘솔창에서 컨트롤+씨 / 컨트롤+디 입력하면 호출(종료할때)
        console.log(input);
        process.exit();
    })
    
    // console.log('??', dirname(`${__filename}`))
    // console.log(dirname(__filename) + '/t.txt')
})





