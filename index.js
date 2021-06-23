const http = require('http');
// const fs = require('fs')
const path = require('path')

/* const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('404.html') */

const express = require('express')
const ejs = require('ejs')

const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
mongoose.connect('mongodb://localhost/my_database',{useNewParser:true})


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

app.set('view engine','ejs')
app.use(express.static('public'))
app.listen(3000,()=>{
    console.log("App listening on port 3000")
})

app.get('/',async(req,res)=>{
    const blogposts = await BlogPost.find({})
    res.render('index',{
        blogposts
    });
})


/* app.get('/',(req,res)=>{
    
    res.render('index')
}) */

app.get('/:_id',async(req,res)=>{
    const blogpost= await BlogPost.findById(req.params._id)
    res.render('blog01',{
        blogpost
    });
    
})

/* app.get('/:id',async(req,res)=>{
    const blogpost= await BlogPost.findById(req.params.id)
    res.render('blog01',{
        blogpost
    });
    
}) */

/* app.get('/blog01.html',(req,res)=>{
    res.render('blog01')
})
*/


/* app.get('/about',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'pages/about.html'))
}) */