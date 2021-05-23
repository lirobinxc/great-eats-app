const reviewsRouter = require('express').Router();
const db = require('../db');

reviewsRouter.get('/', async (req, res) => {
  const result = await db.query('SELECT * FROM reviews ORDER BY restaurant_id');
  res.status(200).json(result.rows);
});

module.exports = reviewsRouter;
