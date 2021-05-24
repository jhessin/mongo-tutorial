/** @format */

import express from 'express';
import mongoose from 'mongoose';

import City from './models/City';
import Country from './models/Country';

const app = express();

app.get('/', (req, res, next) => {
  res.json({
    confirmation: 'success',
    data: 'This is the Mongo project!',
  });
});

app.get('/cities', (req, res, next) => {
  City.find(null)
    .then(cities => {
      res.json({
        confirmation: 'success',
        data: cities,
      });
    })
    .catch(err => {
      res.json({
        confirmation: 'failure',
        data: err.message,
      });
    });
});

app.get('/countries', (req, res, next) => {
  Country.find(null)
    .then(countries => {
      res.json({
        confirmation: 'success',
        data: countries,
      });
    })
    .catch(err => {
      res.json({
        confirmation: 'failure',
        data: err.message,
      });
    });
});

// connect to our Mongo DB:
mongoose
  .connect('mongodb://localhost/world', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(data => {
    console.log('Mongo DB connection success!');
    app.listen(8080, '0.0.0.0', () => {
      console.log('Server listening on port 8080');
    });
  })
  .catch(err => {
    console.error('Mongo DB connection failed', err.message);
  });
