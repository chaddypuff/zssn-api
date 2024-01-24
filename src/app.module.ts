import { Module } from '@nestjs/common';
import { SurvivorsModule } from './survivors/survivors.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/zssn'),
    SurvivorsModule,
  ],
})
export class AppModule {}
