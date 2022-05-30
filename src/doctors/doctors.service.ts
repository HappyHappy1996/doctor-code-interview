import { Injectable } from '@nestjs/common';
import { DoctorsRepository } from './doctors.repository';

@Injectable()
export class DoctorsService {
  constructor(
    private readonly repository: DoctorsRepository,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(name: string) {
    return this.repository.find().find(doctor => doctor.name === name);
  }

}
