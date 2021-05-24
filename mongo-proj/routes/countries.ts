/** @format */

import { Router } from 'express';
import { Country } from '../models';

const router = Router();

router.get('/', (_req, res) => {
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

export { router as countries };
