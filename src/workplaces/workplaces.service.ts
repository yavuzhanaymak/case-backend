import { Injectable } from '@nestjs/common';
import {WorkplacesModel } from 'tools/models/workplaces.model';
import {  WorkplacesCreateDto,  WorkplacesUpdateDto } from 'tools/dtos/workplaces.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResourceService } from 'libs/services/resource.service';
 


@Injectable()
export class WorkplacesService extends ResourceService<
WorkplacesModel,
WorkplacesCreateDto,
WorkplacesUpdateDto
> {
  constructor(@InjectModel('Workplaces') userMongo: Model< WorkplacesModel>) {
    super(userMongo);
  }

  

 
}
