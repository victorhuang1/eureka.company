const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title:String,
    body:String,
    tag:String,
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost