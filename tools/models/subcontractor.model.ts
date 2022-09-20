import * as mongoose from 'mongoose';

export class SubcontractorModel {
  id: string;
  name: string;
  workplacesID:string
 
}

export const SubcontractorSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'User name is required'] },
  workplacesID: { type: String, required: [true, 'User name is required'] },

});
