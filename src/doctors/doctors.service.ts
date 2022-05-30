import { Injectable } from '@nestjs/common';
import { DoctorsRepository } from './doctors.repository';

@Injectable()
export class DoctorsService {
  constructor(
    private readonly repository: DoctorsRepository,
  ) {}

  findAll() {
    return this.repository.findAll();
  }

  findOne(name: string) {
    return this.repository.findOneByName(name);
  }

}
