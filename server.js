const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    console.log('request made');

    //routing
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
    }
    res.setHeader('Content-Type','text/html');
    //returning html page
    fs.readFile(path,(err, data)=>{
        if(err){
            res.write('error in loading page');
            res.end();
        }
        else{
            res.end(data);
        }
    })

});

server.listen(3000, 'localhost', () =>{
    console.log('listening for requests on port 3000');
});