import { Injectable } from '@nestjs/common';
import * as DOCTORS from '../../providers/providers.json';
import { Doctor } from './entities/doctor.entity';
import { isTimestampBetween } from '../utils';

@Injectable()
export class DoctorsRepository {

  findAll(): Doctor[] {
    return DOCTORS;
  }

  findOneByName(name: string) {
    return this.findAll().find(doctor => doctor.name === name);
  }

  findRelevant(specialty: string, minScore: number, timestamp) {
    const allDoctors = this.findAll();

    return allDoctors
      // case insensitive
      .filter(doctor => doctor.specialties.map(specialty => specialty.toUpperCase()).includes(specialty.toUpperCase()))
      .filter(doctor => doctor.score >= minScore)
      .filter(doctor => doctor.availableDates.find(range => isTimestampBetween(timestamp, range.from, range.to)))
      .sort();
  }
}
