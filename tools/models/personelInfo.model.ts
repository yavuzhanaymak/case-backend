import * as mongoose from 'mongoose';

export class PersonelInfoModel {
  id: string;
  name: string;
  surname: string;
  birthDate:string;
  gender:string
}

export const PersonelInfoSchema = new mongoose.Schema({
  name: {
    type: String,
  
  },
  surname: { type: String },
  birthDate: { type: String },

  gender: { type: String },

});
