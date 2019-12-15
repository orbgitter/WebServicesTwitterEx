const Tweet  = require('./models/tweet');
const User  = require('./models/user');

exports.tweetController = {
 get(req, res) {},
 post(req, res) {},
};

exports.tweetController = {
    get(req, res) {
      console.log("Tweeter :)");
      let tweet = {
        id: 1,
        content: "BLA BLA BLA",
        userId: 3,
        parentTweetId: Math.floor(Math.random() * 10)
      }
      res.json(tweet);
    },
    post(req, res) {
      console.log('new entity saved!');
      const { body } = req;
      restaurant.push(body);
      res.send('new entity saved!');
    },
   };