import { PersonelInfoModel } from './personelInfo.model';
import { foodChoiseModel } from './foodChoise.model';
import * as mongoose from 'mongoose';

export class CaseModel {
  id: string;
  personelInfo: PersonelInfoModel[];
  foodChoise: foodChoiseModel[];
}

export const CaseSchema = new mongoose.Schema({

  personelInfo: { type: Array },
  foodChoise: { type: Array },
});
