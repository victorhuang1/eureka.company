const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true});
BlogPost.create({
    title:'test',
    body:'test1'
},(error,blogpost)=>{
    console.log(err,blogpost)
})