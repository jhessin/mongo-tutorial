/** @format */

import mongoose from 'mongoose';

const scheme = new mongoose.Schema({
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

export const City = mongoose.model('City', scheme);
