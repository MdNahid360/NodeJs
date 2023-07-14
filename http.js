const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.write('hello world this my first server');
        res.end();
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