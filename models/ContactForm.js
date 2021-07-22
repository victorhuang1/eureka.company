const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ContactFormSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    phoneNumber:Number,
    message:String,
});

const ContactForm = mongoose.model('ContactForm', ContactFormSchema);

module.exports = ContactForm

