const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ProfolioSchema = new Schema({
    title:String,
    body:String,
    image:String,
    code:String,
    demo:String
});

const Profolio = mongoose.model('Profolio', ProfolioSchema);

module.exports = Profolio