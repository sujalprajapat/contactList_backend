var mongoose = require('mongoose');
var contactSchema = mongoose.Schema({
    firstName :{
        type: String,
    },
    lastName :{
        type: String,
    },
    mobileNo :{
        type: String,
    },
    email :{
        type: String,
    },
    nickName :{
        type: String,
    },
});
module.exports = mongoose.model('contact', contactSchema);
 