const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    token: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    },
    images: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Image'
        }
    ]
},
    // Add timestamps for when the document is created and last modified
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);