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
import { WorkplacesService } from './workplaces.service';
import { WorkplacesCreateDto, WorkplacesUpdateDto } from 'tools/dtos/workplaces.dto';
import { WorkplacesModel } from 'tools/models/workplaces.model';
import { FilterModel } from 'tools/models/filter.model';
import { Roles } from 'libs/decorators/role.decorator';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('workplaces')
@Controller('workplaces')
export class WorkplacesController {
  constructor(private userService: WorkplacesService) {}

  @Post()
  @Roles('Admin')
  async createWorkplaces(@Body() body: WorkplacesCreateDto): Promise<WorkplacesModel> {
    
    return await this.userService.create(body);
  }

  @Get()
  async getAllWorkplaces(@Query() query: FilterModel): Promise<WorkplacesModel[]> {
    return await this.userService.findAll(query);
  }

  @Get(':id')
 
  async getWorkplaces(@Param() params): Promise<WorkplacesModel> {
    return await this.userService.findOne(params.id);
  }

  @Put(':id')
 
  async updateWorkplaces(
    @Param('id') id: string,
    @Body() userUpdateDto: WorkplacesUpdateDto,
  ): Promise<WorkplacesModel> {
    return await this.userService.update(id, userUpdateDto);
  }

  @Delete(':id')
  async removeWorkplaces(@Param('id') id: string): Promise<WorkplacesModel> {
    return await this.userService.delete(id);
  }
}
