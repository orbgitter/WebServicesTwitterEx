const { Router } = require('express');
const {
 tweetController
} = require('./controller');

const tweetRouter = new Router();

tweetRouter.get('/all', tweetController.get);
tweetRouter.get('/', tweetController.get);
// tweetRouter.get('/:id', restaurantController.get);
// tweetRouter.post('/', restaurantController.post);

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
   