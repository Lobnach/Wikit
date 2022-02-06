const mongoose = require('mongoose');
const tweetSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: [true, 'authorname is required']
    },
    
    content: {
        type: String,
        required: [true, 'content is required']
    },

    date: {
        type: Date,
        default: Date.now()
    }
    

})
module.exports = mongoose.model('tweet',tweetSchema);