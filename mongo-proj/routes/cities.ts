/** @format */

import { Router } from 'express';
import { City } from '../models';

const router = Router();

router.get('/', (_req, res) => {
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

export { router as cities };
