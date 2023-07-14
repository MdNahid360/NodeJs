const http = require('http');
const fs = require('fs');

const server =http.createServer((req, res) => {
    const readStream = fs.createReadStream(__dirname+'/bigData.txt', 'utf8');

    readStream.pipe(res)
})

server.listen(3000)


// const fs = require('fs');
// const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');
// const ourWriteStream = fs.createWriteStream(`${__dirname}/outputData.txt`, 'utf8');

// // ourReadStream.on('data', (chunk) =>{
// //    ourWriteStream.write(chunk);
// // });

// ourReadStream.pipe(ourWriteStream)