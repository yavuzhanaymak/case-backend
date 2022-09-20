import * as mongoose from 'mongoose';

export class foodChoiseModel {
  id: string;
  ingredients: string;
  drink: string;
  additional:string;
}

export const FoodChoiseSchema = new mongoose.Schema({
  ingredients: {
    type: String,
  },
  additional: { type: String },
  drink: { type: String },

});
