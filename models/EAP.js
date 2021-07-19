const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const EAPSchema = new Schema({
    'education':{
        major:Array,
        instituteName:Array,
        instituteLogo:Array,
    },
    'awardsHonours':{
        awardName:Array,
        awardedby:Array,
        awardContent:Array,
        awardYear:Array
    },
    'publications':{
        journal:Array,
        conference:String,
        book:String,
    }
});

const EAP = mongoose.model('EAP', EAPSchema);

module.exports = EAP

