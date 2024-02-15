const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    title:{
        type:String
    },
    imageUrl: {
        type: String,
        required:true
    }
},
    // Add timestamps for when the document is created and last modified
    { timestamps: true }
);

module.exports = mongoose.model('Image', imageSchema);