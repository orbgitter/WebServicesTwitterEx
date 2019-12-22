const mongoose = require('mongoose');

const schema = new mongoose.Schema ({
    content: {type:String, required:true},
    userId: {type: String, required:true},
    parentTweetId: {type: Number}
}, {
    collection: 'tweets'
});

const Tweet = mongoose.model('Tweet', schema);

module.exports = Tweet;