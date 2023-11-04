import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const app = express();
const port = 4000;
const __filename = fileURLToPath(import.meta.url);


app.listen(port, () => {
    console.log('app listen!');
    const testfile = fs.readFileSync(dirname(__filename) + '/t.txt', { encoding: 'utf-8', flag: 'r' })
    console.log('??', testfile)
    // console.log('??', dirname(`${__filename}`))
    // console.log(dirname(__filename) + '/t.txt')
})
