const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const MechSchema = new Schema({
    companyName:String,
    companyLoc:String,
    companyLogo:String,
    duration:String,
    jobTitle:String,
    jobDescription:Array,
    projectName:Array,
    projectUrl:Array,
    projectImage:Array
});

const Mech = mongoose.model('Mech', MechSchema);

module.exports = Mech

