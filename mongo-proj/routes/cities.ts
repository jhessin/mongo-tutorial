/** @format */

import { Router } from 'express';
import { City } from '../models';

const router = Router();

router.get('/', (req, res) => {
  const { query } = req;

  City.find(query)
    .then(cities => {
      res.json({
        confirmation: 'success',
        data: cities,
      });
    })
    .catch(err => {
      res.json({
        confirmation: 'failure',
        message: err.message,
      });
    });
});

router.get('/:id', (req, res, next) => {
  City.findById(req.params.id)
    .then(city => {
      res.json({
        confirmation: 'success',
        data: city,
      });
    })
    .catch(() => {
      res.json({
        confirmation: 'fail',
        message: `City id:${req.params.id} not found`,
      });
    });
});

export { router as cities };
