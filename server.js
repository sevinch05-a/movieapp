const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');



 
const movieRoutes = require('./routes/movies');
const reviewRoutes = require('./routes/reviews');

app.use('/movies', movieRoutes);
app.use('/reviews', reviewRoutes);

app.get('/', (req, res) => {
    res.render('index');
  });

  app.use((err, req, res, next) => {

    console.error(err.stack);

    res.status(500).send('Something went wrong!');
  });
  
 

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

