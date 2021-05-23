const express = require('express');
const { setCors } = require('./middleware/cors');
const restaurantsRouter = require('./routers/restaurantsRouter');
const reviewsRouter = require('./routers/reviewsRouter');

const app = express();

/* PRE-ROUTES MIDDLEWARE */
app.use(setCors);
app.use(express.json());

/* ROUTE: API HOMEPAGE */
app.get('/api', (req, res) => {
  res.send('Welcome to the Restaurants API');
});

/* ROUTES */
app.use('/api/restaurants', restaurantsRouter);
app.use('/api/reviews', reviewsRouter);

/* POST-ROUTES MIDDLEWARE*/

module.exports = app;
