const mongoose = require('mongoose')

const bookschema = mongoose.Schema({
    id: Number,
    name:{
        type:String,
        require:true
    },
    price :Number,
    category :String,
    image :String,
    tittle :String
});

module.exports = mongoose.model("book",bookschema); 