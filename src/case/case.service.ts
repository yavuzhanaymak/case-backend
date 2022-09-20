import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CaseModel } from 'tools/models/case.model';
import { CaseDto } from 'tools/dtos/case.dto';
import { ResourceService } from 'libs/services/resource.service';

@Injectable()
export class CaseService extends ResourceService<
  CaseModel,
  CaseDto,
  CaseDto
> {
  constructor(
    @InjectModel('Case')
    caseMongo: Model<CaseModel>,
  ) {
    super(caseMongo);
  }
}
