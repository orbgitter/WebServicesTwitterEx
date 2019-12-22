const { Router } = require('express');
const {
 tweetController
} = require('./controller');

const tweetRouter = new Router();

tweetRouter.get('/all', tweetController.getAllTweets);
tweetRouter.get('/', tweetController.getAllTweets);
tweetRouter.get('/:id', tweetController.getTweetById);
tweetRouter.post('/', tweetController.addTweeter);
tweetRouter.put('/:id', tweetController.editTweet);
tweetRouter.delete('/:id', tweetController.removeTweet);
// userRouter.get('/:id', userController.get);
// userRouter.post('/', userController.post);
// userRouter.put('/:id', userController.put);

// //settings
// orderRouter.get('/:id', orderController.get);
// orderRouter.post('/', orderController.post);
// orderRouter.put('/:id', orderController.put);
// orderRouter.delete('/:id', orderController.delete);

module.exports = {
    tweetRouter,
};
   