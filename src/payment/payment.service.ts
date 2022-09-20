import { Injectable } from '@nestjs/common';
import { PaymentModel } from 'tools/models/payment.model';
import {  PaymentCreateDto,  PaymentUpdateDto } from 'tools/dtos/payment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResourceService } from 'libs/services/resource.service';
 


@Injectable()
export class  PaymentService extends ResourceService<
PaymentModel,
PaymentCreateDto,
PaymentUpdateDto
> {
  constructor(@InjectModel('Payment') userMongo: Model< PaymentModel>) {
    super(userMongo);
  }

  

 
}
