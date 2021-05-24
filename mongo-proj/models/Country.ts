/** @format */

import mongoose from 'mongoose';

const schema = new mongoose.Schema({
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

export const Country = mongoose.model('Country', schema);
