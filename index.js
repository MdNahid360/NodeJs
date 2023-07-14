const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head></html>');
        res.write(' <body><form method="post" action="/message"><input name="message" /></form></body>')
        res.end();
    }else if(req.url === '/message' && req.method === 'POST'){
        const body = []
        req.on('data', (chunk)=>{
           body.push(chunk);
        })
        req.on('end',()=>{
            console.log('finished!!!');
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            res.write('Thanks for sending!!!');
            res.end();
        });
    }else if(req.url === '/users'){
        res.write('all user information is here');
        res.end();
    }else{
        res.write('NOT FOUND');
        res.end();
    }
});

server.listen(3000)

console.log('listening on port 3000');

// const fs = require('fs');
// const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');

// ourReadStream.on('data', (data) =>{
//    console.log(data);
// })