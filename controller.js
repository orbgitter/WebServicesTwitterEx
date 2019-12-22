const Tweet  = require('./models/tweet');
const User  = require('./models/user');

const mongoose = require('mongoose');
const mongodb = require('./mongodb');

exports.tweetController = {
    getAllTweets(req, res, next) {
      mongoose.connect(mongodb.mongoDbUrl, mongodb.mongoDbOptions)
      .then(async() => {
        const result = await Tweet.find({})

        if(result) res.json(result)
        else res.status(404).send('not found')
      })
      .catch(err => { 
        console.error('some error occurred', err)
        res.status(500).send(err.message)
      });
    },
    getTweetById(req, res, next) {
    mongoose.connect(mongodb.mongoDbUrl, mongodb.mongoDbOptions)
    .then(async() => {
      const {id = null} = req.params;
      const result = await Tweet.findOne({_id: id});

      if(result) res.json(result)
      else res.status(404).send(`tweet with the id ${id} has not been found`);
    })
    .catch(err => {
      console.error('some error occurred', err);
      res.status(500).send(err.message);
    })
    },
    addTweeter(req, res, next) {
      console.log('new entity saved!');
      // const { body } = req;
      // restaurant.push(body);
      // res.send('new entity saved!');

      mongoose.connect(mongodb.mongoDbUrl, mongodb.mongoDbOptions)
        .then(async() => {
          const {
            id = null,
            content = null,
            userId = null,
            parentTweetId = null
          } = req.body;
          console.log("req.body");
          console.log(req.body);
          console.log(`id = ${id}, content = ${content}, userId = ${userId}, parentTweetId = ${parentTweetId}`);
          if(!(content == ' ' || content.length == 0 || FormData.connect.value =="" || content.length > 280))
          {
            const tweet = new Tweet({id, content, userId, parentTweetId});
            console.log(tweet);
            const result = await tweet.save();
            console.log(result);
          }
          if(result) {
            res.json(result);
          }
          else {
            res.status(404).send('not found');
          }
        }).catch(err => {
          console.error("Some error occured", err);
          res.status(500).send(err);
        })
    },
    editTweet(req,res,next){
      mongoose.connect(mongodb.mongoDbUrl, mongodb.mongoDbOptions)
      .then(async() => {
        const {id = null} = req.params;
        const {userId = null, content = null, parentTweetId = null} = req.body;
        const result = await Tweet.updateOne({_id: id}, {userId, content, parentTweetId})   // _id with '_' because mongo generate it auto for us. format-> {generated id KEY : our id (null) VALUE, all the params to update}    
        
        if(result) res.json(result)
        else res.status(404).send(`tweet with the id ${id} has not been found`);
      })
      .catch(err => {
        console.error("Some error occured", err);
        res.status(500).send(err);
      })
    },
    removeTweet(req,res,next){
      mongoose.connect(mongodb.mongoDbUrl, mongodb.mongoDbOptions)
      .then(async() => {

        // const id = new mongoose.Types.ObjectID(req.body.id);
        const id = new mongoose.mongo.ObjectId(req.body.id);
        const result = await Tweet.deleteOne({_id : id});

        if(result) res.json(result)
        else res.status(404).send(`tweet with the id ${id} has not been found`);
      })
      .catch(err => {
        console.error("Some error occured", err);
        res.status(500).send(err);
      })
    }

   };