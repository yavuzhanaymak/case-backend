import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { CaseService } from './case.service';
import { CaseModel } from 'tools/models/case.model';
import { CaseDto } from 'tools/dtos/case.dto';
import { FilterModel } from 'tools/models/filter.model';

@Controller('case')
export class CaseController {
  constructor(private readonly caseService: CaseService) {}

  @Post()
  async CreateCase(@Body() body: CaseDto): Promise<CaseModel> {
    return this.caseService.create(body);
  }

  @Get()
  async getAllCase(@Query() query: FilterModel): Promise<CaseModel[]> {
    return await this.caseService.findAll(query);
  }

  @Get(':id')
  async GetCase(@Param() params): Promise<CaseModel> {
    return this.caseService.findOne(params.id);
  }

  @Put(':id')
  async updateCase(
    @Param('id') id: string,
    @Body() caseDto: CaseDto,
  ): Promise<CaseModel> {
    return this.caseService.update(id, caseDto);
  }

  @Delete(':id')
  async removeCase(@Param('id') id: string): Promise<CaseModel> {
    return this.caseService.delete(id);
  }
}
