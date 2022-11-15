const http = require('http');

const fe = require('fs');


const server = http.createServer( (req, res) => {
 
    let path = './view/';
    switch(req.url){
        case'/':
        path += 'home.html';
        break;
        case'/about':
        path += 'about.html';
        break;
        
        default:
        path += '404.html';
        break;
    }


    res.setHeader('Content-Type', 'text/html')
    
    fe.readFile(path, (err, data) => {
    if(err) {
        console.log(err)
        res.end()
    }
else{
    res.write(data);
    res.end()
} 
})

})

server.listen(3000, 'localhost', () => {
    console.log('sever is listening on port 3000')
}) 