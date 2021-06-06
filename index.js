const http = require('http');
const server = http.createServer((req,res) => {
   if(req.url = '/about')
       res.end('hello world!')
});
server.listen(3000)