const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  movieId: mongoose.Schema.Types.ObjectId,
  content: String
});

module.exports = mongoose.model('Review', reviewSchema);                                        