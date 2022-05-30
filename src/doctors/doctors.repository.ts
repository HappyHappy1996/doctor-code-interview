import { Injectable } from '@nestjs/common';
import * as DOCTORS from '../../providers/providers.json';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorsRepository {
  find(): Doctor[] {
    return DOCTORS;
  }
}
