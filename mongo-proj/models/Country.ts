/** @format */

import mongoose from 'mongoose';

const Country = new mongoose.Schema({
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

export default mongoose.model('Country', Country);
