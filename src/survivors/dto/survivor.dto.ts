import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class LocationDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Latitude of the location' })
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Longitude of the location' })
  longitude: number;
}

class InventoryItemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Item name' })
  item: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Quantity of the item' })
  quantity: number;
}

export class SurvivorDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Name of the survivor' })
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Age of the survivor' })
  age: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Gender of the survivor' })
  gender: string;

  @ValidateNested({ each: true })
  @Type(() => LocationDto)
  @ApiProperty({
    type: LocationDto,
    description: 'Last known location of the survivor',
  })
  lastLocation: LocationDto;

  @ValidateNested({ each: true })
  @Type(() => InventoryItemDto)
  @ApiProperty({
    type: InventoryItemDto,
    description: 'Inventory of the survivor',
  })
  inventory: InventoryItemDto;
}
