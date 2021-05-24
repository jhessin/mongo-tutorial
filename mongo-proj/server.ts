/** @format */

// Module imports
import express from 'express';
import mongoose from 'mongoose';

// Route imports
import { cities, countries } from './routes';

// create app
const app = express();

// add default home route
app.get('/', (_req, res) => {
  res.json({
    confirmation: 'success',
    data: 'This is the Mongo project!',
  });
});

// add routes
app.use('/cities', cities);
app.use('/countries', countries);

// connect to our Mongo DB:
mongoose
  .connect('mongodb://localhost/world', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Mongo DB connection success!');
    // start server
    app.listen(8080, '0.0.0.0', () => {
      console.log('Server listening on port 8080');
    });
  })
  .catch(err => {
    console.error('Mongo DB connection failed', err.message);
  });
