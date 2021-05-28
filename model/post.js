const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    creater : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    },
    selectedFile : {
        type : String,
        required : true
    },
    tags : [String],
    createdAt : {
        type : Date,
        default : new Date()
    },
    likeCount : {
        type : Number,
        default : 0
    }
});

const PostMessages = mongoose.model('PostMessage', postSchema);

module.exports = PostMessages;