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
const Portfolio = require('./models/Portfolio');
const Mech = require('./models/Mech');
const EAP = require('./models/EAP');
const ContactForm = require('./models/ContactForm');


//const { ESPIPE } = require('constants');
mongoose.connect('mongodb://localhost/my_database',{useNewParser:true})

//const searchGoogle = require('./searchGoogle');

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

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.listen(3000,()=>{
    console.log("App listening on port 3000")
})

app.get('/',async(req,res)=>{
    const blogposts = await BlogPost.find({})
    const portfolio = await Portfolio.find({})
    res.render('index',{
        blogposts:blogposts,
        portfolio:portfolio
    });
})

app.get('/mech',async(req,res)=>{
    const mech = await Mech.find({})
    const eap = await EAP.find({})
    res.render('mech',{
        mech:mech,
        eap:eap
    });
})
        

app.get('/:_id',async(req,res)=>{
    const blogpost= await BlogPost.findById(req.params._id)
    const recentBlogposts = await BlogPost.find({})
    res.render('blog01',{
        blogpost:blogpost,
        recentBlogposts:recentBlogposts
    });
    
})


app.post('/submitForm',(req,res)=>{
    /* ContactForm.create({
        firstName:'test',
        lastName:'tes',
        email:'te',
        phoneNumber:123,
        message:'111'
    },(error,contactForm)=>{
        console.log(error,contactForm)
    }) */
    console.log(req.body)
    res.redirect('/')
})




