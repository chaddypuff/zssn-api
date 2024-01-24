import * as mongoose from 'mongoose';

export const SurvivorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  lastLocation: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  inventory: [
    {
      item: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  infected: { type: Boolean, default: false },
});
