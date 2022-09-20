import { Module } from '@nestjs/common';
import {  WorkplacesController } from './workplaces.controller';
import { WorkplacesService } from './workplaces.service';
import { MongooseModule } from '@nestjs/mongoose';
import {  WorkplacesSchema } from 'tools/models/workplaces.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Workplaces', schema:WorkplacesSchema }])],
  controllers: [WorkplacesController],
  providers: [WorkplacesService],
})
export class WorkplacesModule {}
