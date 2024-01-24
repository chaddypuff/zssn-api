import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { SurvivorsService } from './survivors.service';
import { SurvivorDto } from './dto/survivor.dto';
import { Survivor } from './survivors.model';
import { UpdateLocationDto } from './dto/update-location.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('survivors')
@Controller('survivors')
export class SurvivorsController {
  constructor(private readonly survivorsService: SurvivorsService) {}

  @ApiOperation({ summary: 'Create a new survivor' })
  @ApiBody({ type: SurvivorDto, description: 'Survivor details' })
  @Post()
  @ApiResponse({
    status: 201,
    description: 'Successfully created a new survivor',
  })
  async addSurvivor(@Body() survivorData: SurvivorDto): Promise<Survivor> {
    return this.survivorsService.addSurvivor(survivorData);
  }

  @ApiOperation({ summary: 'Delete a survivor' })
  @ApiParam({ name: 'id', description: 'Survivor ID' })
  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Successfully deleted a survivor' })
  deleteSurvivor(@Param('id') id: string) {
    return this.survivorsService.deleteSurvivor(id);
  }

  @ApiOperation({ summary: 'Get all survivors' })
  @Get()
  @ApiResponse({ status: 200, description: 'List of all survivors' })
  async getAllSurvivors(): Promise<Survivor[]> {
    return this.survivorsService.getAllSurvivors();
  }

  @ApiOperation({ summary: 'Update the location of a survivor' })
  @ApiParam({ name: 'id', description: 'Survivor ID' })
  @ApiBody({ type: UpdateLocationDto, description: 'New location details' })
  @Patch(':id/location')
  @ApiResponse({
    status: 200,
    description: 'Successfully updated survivor location',
  })
  updateLocation(
    @Param('id') id: string,
    @Body() updateLocationDto: UpdateLocationDto,
  ) {
    return this.survivorsService.updateLocation(id, updateLocationDto);
  }

  @ApiOperation({ summary: 'Mark a survivor as infected' })
  @ApiParam({ name: 'id', description: 'Survivor ID' })
  @Patch(':id/markInfected')
  @ApiResponse({
    status: 200,
    description: 'Successfully marked survivor as infected',
  })
  markInfected(@Param('id') id: string) {
    return this.survivorsService.markInfected(id);
  }
}
