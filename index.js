const http = require('http');
// const fs = require('fs')
const path = require('path')

/* const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('404.html') */

const express = require('express')

/* const server = http.createServer((req,res) => {
    if(req.url === '/about')
        res.end(aboutPage)
    else if(req.url === '/contact')
        res.end(contactPage)
    else if(req.url === '/')
        res.end(homePage)
    else {
        res.writeHead(404)
        res.end(notFoundPage)
    }
});
server.listen(3000) */

const app = new express();
app.use(express.static('public'))
app.listen(3000,()=>{
    console.log("App listening on port 3000")
})

app.get('/',(req,res)=>{
    /* res.json({
        name:"test"
    }) */
    res.sendFile(path.resolve(__dirname,'pages/index.html'))
})

app.get('/about',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'pages/about.html'))
})