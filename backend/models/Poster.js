const mongoose = require('mongoose')

const PosterSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description: String,
    price : {
        type: Number,
        required: true
    },
    category : String,
    imageURL : {
        type:String,
        required:true
    },
    CreatedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Poster',PosterSchema)