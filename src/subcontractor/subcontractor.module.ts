import { Module } from '@nestjs/common';
import {  SubcontractorController } from './subcontractor.controller';
import {  SubcontractorService } from './subcontractor.service';
import { MongooseModule } from '@nestjs/mongoose';
import {  SubcontractorSchema } from 'tools/models/subcontractor.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Subcontractor', schema:SubcontractorSchema }])],
  controllers: [SubcontractorController],
  providers: [SubcontractorService],
})
export class SubcontractorModule {}
