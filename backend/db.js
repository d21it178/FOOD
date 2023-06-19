const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://food:food@cluster0.hve7hxo.mongodb.net/food?retryWrites=true&w=majority'
const mongoDB = async() => {
    try {
        mongoose.connect(mongoURL, { useNewUrlParser: true})
        console.log("Db connected")
    }
    catch(err){
        console.log("err connecting db"+err)
    }
}

 module.exports = mongoDB;

