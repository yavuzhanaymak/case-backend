import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SubcontractorCreateDto {
  @IsNotEmpty()
  @Length(2, 20)
  @ApiProperty()
  name: string;
  @IsNotEmpty()
 
  @ApiProperty()
  workplacesID: string;
}

// tslint:disable-next-line:max-classes-per-file
export class SubcontractorUpdateDto {
  @ApiProperty()
  name: string;
  workplacesID:string;
  
}


