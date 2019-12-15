const mongoose = require('mongoose');

const schema = new mongoose.Schema ({
id:{ type: Number, required:true},
content: {type:String, required:true},
userId: {type: String, required:true},
parentTweetId: {type: Number}
}, {
    collection: 'tweets'
});

const Tweet = mongoose.model('Tweet', schema);

module.exports = Tweet;