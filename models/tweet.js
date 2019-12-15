const { Schema, model } = require('mongoose');

const tweetSchema = new Schema ({
id:{ type: Number, required:true},
content: {type:String, required:true},
userId: {type: String, required:true},
parentTweetId: {type: Number}
}, {
    collection: 'tweets'
});

const Tweet = model('Tweet', userSchema);

module.exports = Tweet;