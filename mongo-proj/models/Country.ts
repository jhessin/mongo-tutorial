/** @format */

import { Schema, model } from 'mongoose';

const schema = new Schema({
  name: {
    type: String,
    default: '',
  },
  continent: {
    type: String,
    default: '',
  },
  population: {
    type: Number,
    default: 0,
  },
});

export const Country = model('Country', schema);
