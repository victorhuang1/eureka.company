const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
    title:String,
    body:String,
    image:String,
    code:String,
    demo:String
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio