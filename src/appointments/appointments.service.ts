import { Injectable } from '@nestjs/common';
import { orderBy } from 'lodash';
import { DoctorsRepository } from '../doctors/doctors.repository';
import { CreateAppointmentDto} from './dto/create-appointment.dto';
import { isTimestampBetween } from '../utils';
import { GetRelevantDoctorDto } from './dto/get-relevant-doctor.dto';

@Injectable()
export class AppointmentsService {
  constructor(
    private readonly repository: DoctorsRepository,
  ) {}

  findRelevant(getRelevantDoctorDto: GetRelevantDoctorDto): string[] {
    const relevantDoctors = this.repository.findRelevant(
      getRelevantDoctorDto.specialty, getRelevantDoctorDto.minScore, getRelevantDoctorDto.date,
    );

    return orderBy(relevantDoctors, ['score'], ['desc'])
      .map(doctor => doctor.name);
  }

  isAvailable(createAppointmentDto: CreateAppointmentDto): boolean {
    const doctor = this.repository.findOneByName(createAppointmentDto.name)
    if (!doctor) return false;

    const foundRange = doctor.availableDates.find(range => isTimestampBetween(createAppointmentDto.date, range.from, range.to))

    return !!foundRange;
  }
}
