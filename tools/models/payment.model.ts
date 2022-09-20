import * as mongoose from 'mongoose';

export class PaymentModel {
  id: string;
  odemeTur: string;
  odemeMiktar:string;
  odemeTarih:string;
 aciklama:string;
 odemeYapan:string;
 odemeYapilan:string;
 odemeYapilanID:string;
 verilisTarihi:string;
 imageURL:string;
 vadesi:string;
 cekNumarasi:string;
 bankaAdi:string;
 odendi:string
 sehir:string

}

export const PaymentSchema = new mongoose.Schema({
  odemeTur: { type: String, required: [true, 'Ödeme Türü boş olamaz'] },
  odemeMiktar: { type: String, required: [true, 'Ödeme Miktarı Boş Olamaz'] },
  odemeTarih: { type: String, required: [false, 'Ödeme Tarihi Boş Olamaz'] },
  aciklama: { type: String, required: [true, 'Açıklama Boş olamaz'] },
  odemeYapan: { type: String, required: [true, 'Ödeme Yapan Boş olamaz'] },
  odemeYapilan:{type:String,required : [true, 'Ödeme yapılan boş geçilemez']},
  odemeYapilanID:{type:String,required : [true, 'Ödeme yapılan boş geçilemez']},
  bankaAdi:{type:String,required : [false, 'Ödeme yapılan boş geçilemez']},

  verilisTarihi:{type:String,required : [false, 'Ödeme yapılan boş geçilemez']},
  vadesi:{type:String,required : [false, 'Ödeme yapılan boş geçilemez']},
  cekNumarasi:{type:String,required : [false, 'Ödeme yapılan boş geçilemez']},
  imageURL:{type:String,required : [false, 'Ödeme yapılan boş geçilemez']},

  odendi:{type:String,required : [false, 'Ödeme yapılan boş geçilemez']},
  sehir:{type:String,required : [false, 'Ödeme yapılan boş geçilemez']}

});
