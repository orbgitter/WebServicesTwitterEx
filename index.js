const Express = require('express');
const logger = require('morgan'); // NOTE: for debugging
const { tweetRouter } = require('./router');
const app = Express();
const port = process.env.PORT || 3000;

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(logger('dev'));

require('./db_connections');

app.use('/tweet', tweetRouter);
// app.use('/user', userRouter);
// app.use('/account', orderRouter);


//exception catch
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
   });
   
app.listen(port, () => console.log('Express server is running on port ', port));