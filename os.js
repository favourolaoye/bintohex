const os = require('os');

console.log(os.homedir(), os.type());

///file system

const fs = require('fs');

//reading a file

fs.readFile('./blog.txt', (err,data) => {
    if(err) {
        console.log('_err:',err);
        
    }
    else{
        console.log('No Error')
    }
console.log(data);
})

//writing a file

fs.writeFile('./blog.txt', 'hello this is seyi', () => {
console.log('file written');
})

//readstream

const readStream = fs.createReadStream('./blog.txt', {encoding: 'utf-8'})

const writeStrem = fs.createWriteStream('./write')

readStream.on('data', (chunk) => {

console.log('\nNew chunk\n');

console.log(chunk);



});
readStream.pipe(writeStrem);