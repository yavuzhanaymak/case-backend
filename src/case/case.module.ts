import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CaseController } from './case.controller';
import { CaseService } from './case.service';
import { CaseSchema } from 'tools/models/case.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Case', schema: CaseSchema }])],
  controllers: [CaseController],
  providers: [CaseService],
})
export class CaseModule {}
