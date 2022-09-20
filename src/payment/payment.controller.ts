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
import { PaymentService } from './payment.service';
import { PaymentCreateDto, PaymentUpdateDto } from 'tools/dtos/payment.dto';
import { PaymentModel } from 'tools/models/payment.model';
import { FilterModel } from 'tools/models/filter.model';
import { Roles } from 'libs/decorators/role.decorator';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('payment')
@Controller('payment')
export class PaymentController {
  constructor(private userService: PaymentService) {}

  @Post()
  @Roles('Admin')
  async createPayment(@Body() body: PaymentCreateDto): Promise<PaymentModel> {
    
    return await this.userService.create(body);
  }

  @Get()
  async getAllPayment(@Query() query: FilterModel): Promise<PaymentModel[]> {
    return await this.userService.findAll(query);
  }

  @Get(':sehirID/:odemeTip/:islem')
 
  async getPlacesPayment(@Param() params): Promise<PaymentModel> {
    return await this.userService.findWorkplacesPayment(params.sehirID,params.odemeTip);
  }
  @Get(':id')
 
  async findSubs(@Param() params): Promise<PaymentModel> {
    return await this.userService.findSubs(params.id);
  }
  @Get(':subID/:odemeTip')
 
  async getDetailSubs(@Param() params): Promise<PaymentModel> {
    return await this.userService.findSubsPayment(params.subID,params.odemeTip);
  }

  @Put(':id')
 
  async updatePayment(
    @Param('id') id: string,
    @Body() userUpdateDto: PaymentUpdateDto,
  ): Promise<PaymentModel> {
    return await this.userService.update(id, userUpdateDto);
  }

  @Delete(':id')
  async removePayment(@Param('id') id: string): Promise<PaymentModel> {
    return await this.userService.delete(id);
  }
}
