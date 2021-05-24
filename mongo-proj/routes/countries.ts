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

export { router as countries };
