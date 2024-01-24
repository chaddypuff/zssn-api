import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Survivor } from './survivors.model';
import { SurvivorDto } from './dto/survivor.dto';

@Injectable()
export class SurvivorsService {
  constructor(
    @InjectModel('Survivor') private readonly survivorModel: Model<Survivor>,
  ) {}

  async addSurvivor(survivorData: SurvivorDto): Promise<Survivor> {
    const survivor = new this.survivorModel(survivorData);
    return survivor.save();
  }

  async deleteSurvivor(id: string): Promise<Survivor> {
    const survivor = await this.survivorModel.findByIdAndDelete(id);

    if (!survivor) {
      throw new NotFoundException('Survivor not found');
    }

    return survivor;
  }

  async getAllSurvivors(): Promise<Survivor[]> {
    return this.survivorModel.find().exec();
  }

  async updateLocation(
    id: string,
    newLocation: { latitude: number; longitude: number },
  ): Promise<Survivor> {
    try {
      const survivor = await this.survivorModel.findById(id);

      if (!survivor) {
        throw new NotFoundException('Survivor not found');
      }

      return await this.survivorModel.findByIdAndUpdate(
        id,
        { $set: { lastLocation: newLocation } },
        { new: true },
      );
    } catch (error) {
      throw error;
    }
  }

  async markInfected(id: string): Promise<Survivor> {
    const survivor = await this.survivorModel.findByIdAndUpdate(
      id,
      { infected: true },
      { new: true },
    );

    if (!survivor) {
      throw new NotFoundException('Survivor not found');
    }

    return survivor;
  }
}
