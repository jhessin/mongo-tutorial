/** @format */

import { Router } from 'express';
import { Country } from '../models';

const router = Router();

router.get('/', (req, res) => {
  const { query } = req;

  Country.find(query)
    .then(countries => {
      res.json({
        confirmation: 'success',
        data: countries,
      });
    })
    .catch(err => {
      res.json({
        confirmation: 'failure',
        message: err.message,
      });
    });
});

router.get('/add', (req, res, next) => {
  const { query } = req;

  Country.create(query)
    .then(country => {
      res.json({
        confirmation: 'success',
        data: country,
      });
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message,
      });
    });
});

router.get('/update/:id', (req, res, next) => {
  const {
    query,
    params: { id },
  } = req;

  Country.findByIdAndUpdate(id, query, { new: true })
    .then(country => {
      res.json({
        confirmation: 'success',
        data: country,
      });
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message,
      });
    });
});

router.get('/:id', (req, res, next) => {
  Country.findById(req.params.id)
    .then(country => {
      res.json({
        confirmation: 'success',
        data: country,
      });
    })
    .catch(() => {
      res.json({
        confirmation: 'fail',
        message: `Country id:${req.params.id} not found`,
      });
    });
});

export { router as countries };
