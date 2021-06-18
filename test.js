const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true});
BlogPost.create({
    title:'Bruce Harris (journalist)',
    body:'Life and career :Bruce Harris was born in Ireland and trained as a journalist in England in Middlesbrough and Birmingham before joining the Evening Standard in London in 1920 and turning his attention to sport.'
},(error,blogpost)=>{
    console.log(error,blogpost)
})