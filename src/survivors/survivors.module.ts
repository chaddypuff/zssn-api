import { Module } from '@nestjs/common';
import { SurvivorsService } from './survivors.service';
import { SurvivorsController } from './survivors.controller';
import { SurvivorSchema } from './survivors.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Survivor', schema: SurvivorSchema }]),
  ],
  controllers: [SurvivorsController],
  providers: [SurvivorsService],
})
export class SurvivorsModule {}
