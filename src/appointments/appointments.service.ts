import { Injectable, Logger } from '@nestjs/common';
import { orderBy } from 'lodash';
import { DoctorsRepository } from '../doctors/doctors.repository';
import { GetRelevantDoctorDto } from './dto/create-appointment.dto';
import { isTimestampBetween } from '../utils';

@Injectable()
export class AppointmentsService {
  private readonly logger = new Logger(AppointmentsService.name)

  constructor(
    private readonly repository: DoctorsRepository,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(name: string) {
    return this.repository.find().find(doctor => doctor.name === name);
  }

  findRelevant(getRelevantDoctorDto: GetRelevantDoctorDto) {
    const allDoctors = this.repository.find();

    const unsortedRelevantDoctors = allDoctors
      // case insensitive
      .filter(doctor => doctor.specialties.map(specialty => specialty.toUpperCase()).includes(getRelevantDoctorDto.specialty.toUpperCase()))
      .filter(doctor => doctor.score >= getRelevantDoctorDto.minScore)
      .filter(doctor => doctor.availableDates.find(range => isTimestampBetween(getRelevantDoctorDto.date, range.from, range.to)))
      .sort();

    return orderBy(unsortedRelevantDoctors, ['score'], ['desc'])
      .map(doctor => doctor.name);
  }
}
