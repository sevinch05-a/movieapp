const express = require('express');
const router = express.Router();


const Movie = require('../models/movie');


router.get('/', (req, res) => {
  Movie.find({}, (err, movies) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.render('movies', { movies: movies });
    }
  });
});

                                                                                     
router.post('/', (req, res) => {
  const newMovie = new Movie({
    title: req.body.title,
    director: req.body.director
  });
  newMovie.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.redirect('/movies');
    }
  });
});

module.exports = router;