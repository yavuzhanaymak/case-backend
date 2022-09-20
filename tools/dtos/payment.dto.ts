import { IsNotEmpty, Length, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PaymentCreateDto {
  @IsNotEmpty()
  @ApiProperty()
  odemeTur: string;
 
  @IsNotEmpty()
  @ApiProperty()
  odemeMiktar: string;

 
  @ApiProperty()
 
  odemeTarih: Date;

  @IsNotEmpty()
  @ApiProperty()
  aciklama: string;

  @IsNotEmpty()
  @ApiProperty()
  odemeYapan:string;
  @IsNotEmpty()
  @ApiProperty()
  odemeYapilan:string;
  odemeYapilanID:string;
  verilisTarihi:string;
  vadesi:string;
  imageURL:string;
  cekNumarasi:string;
  bankaAdi:string;
  odenen:string;
  sehir:string;
}

// tslint:disable-next-line:max-classes-per-file
export class PaymentUpdateDto {
  @ApiProperty()
  odemeTur: string;
  odemeMiktar:string;
  odemeTarih:string;
  aciklama:string;
  odemeYapan:string;
  odemeYapilan:string;
  odemeYapilanID:string;
  imageURL:string;

  verilisTarihi:string;
  vadesi:string;
  cekNumarasi:string;
  bankaAdi:string;
  odendi:string;
  sehir:string
}


