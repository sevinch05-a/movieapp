const express = require('express');
const router = express.Router();


const Review = require('../models/review');


router.get('/', (req, res) => {
  Review.find({}, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.render('reviews', { reviews: reviews });
    }
  });
});


router.post('/', (req, res) => {
  const newReview = new Review({
    movieId: req.body.movieId,
    content: req.body.content
  });
  newReview.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.redirect('/reviews');
    }
  });
});

module.exports = router;