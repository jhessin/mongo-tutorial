/** @format */

import { Schema, model } from 'mongoose';

const scheme = new Schema({
  name: {
    type: String,
    default: '',
  },
  country: {
    type: String,
    default: '',
  },
  population: {
    type: Number,
    default: 0,
  },
});

export const City = model('City', scheme);
