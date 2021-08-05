const mongoose = require('mongoose')
const ContactForm = require('./models/ContactForm')
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true});
ContactForm.create({
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    message:''
},(error,contactForm)=>{
    console.log(error,contactForm)
})