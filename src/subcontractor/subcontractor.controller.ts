import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UseFilters,
  Query,
} from '@nestjs/common';
import { SubcontractorService } from './subcontractor.service';
import { SubcontractorCreateDto, SubcontractorUpdateDto } from 'tools/dtos/subcontractor.dto';
import { SubcontractorModel } from 'tools/models/subcontractor.model';
import { FilterModel } from 'tools/models/filter.model';
import { Roles } from 'libs/decorators/role.decorator';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('subcontractor')
@Controller('subcontractor')
export class SubcontractorController {
  constructor(private userService: SubcontractorService) {}

  @Post()
  @Roles('Admin')
  async createSubcontractor(@Body() body: SubcontractorCreateDto): Promise<SubcontractorModel> {
    
    return await this.userService.create(body);
  }

  @Get()
  async getAllSubcontractor(@Query() query: FilterModel): Promise<SubcontractorModel[]> {
    return await this.userService.findAll(query);
  }

  @Get(':id')
 
  async findSubs(@Param() params): Promise<SubcontractorModel> {
    return await this.userService.findSubs(params.id);
  }
  @Get(':id/:subID')
 
  async getDetailSubs(@Param() params): Promise<SubcontractorModel> {
    return await this.userService.findOne(params.subID);
  }

  @Put(':id')
 
  async updateSubcontractor(
    @Param('id') id: string,
    @Body() userUpdateDto: SubcontractorUpdateDto,
  ): Promise<SubcontractorModel> {
    return await this.userService.update(id, userUpdateDto);
  }

  @Delete(':id')
  async removeSubcontractor(@Param('id') id: string): Promise<SubcontractorModel> {
    return await this.userService.delete(id);
  }
}
