import { Injectable } from '@nestjs/common';
import { SubcontractorModel } from 'tools/models/subcontractor.model';
import {  SubcontractorCreateDto,  SubcontractorUpdateDto } from 'tools/dtos/subcontractor.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResourceService } from 'libs/services/resource.service';
 


@Injectable()
export class  SubcontractorService extends ResourceService<
SubcontractorModel,
SubcontractorCreateDto,
SubcontractorUpdateDto
> {
  constructor(@InjectModel('Subcontractor') userMongo: Model< SubcontractorModel>) {
    super(userMongo);
  }

  

 
}
