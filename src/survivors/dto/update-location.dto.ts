import { IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLocationDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'New latitude of the location' })
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'New longitude of the location' })
  longitude: number;
}
