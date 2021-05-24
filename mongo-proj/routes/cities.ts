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

export { router as cities };
