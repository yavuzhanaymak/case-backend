import * as mongoose from 'mongoose';

export class WorkplacesModel {
  id: string;
  name: string;
  wallet:string
 
}

export const WorkplacesSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'User name is required'] },
  wallet: { type: String, required: [true, 'User name is required'] },

});
