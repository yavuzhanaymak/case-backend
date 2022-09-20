import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class WorkplacesCreateDto {
  @IsNotEmpty()
  @Length(2, 20)
  @ApiProperty()
  name: string;
  wallet: string;

}

// tslint:disable-next-line:max-classes-per-file
export class WorkplacesUpdateDto {
  @ApiProperty()
  name: string;
  wallet: string;
  
}


