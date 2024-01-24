import { Document } from 'mongoose';

export interface Survivor extends Document {
  name: string;
  age: number;
  gender: string;
  lastLocation: {
    latitude: number;
    longitude: number;
  };
  inventory: {
    item: string;
    quantity: number;
  }[];
  infected: boolean;
}
