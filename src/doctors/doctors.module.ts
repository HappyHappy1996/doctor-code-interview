import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { DoctorsRepository } from './doctors.repository';

@Module({
  controllers: [DoctorsController],
  providers: [DoctorsService, DoctorsRepository],
  exports: [DoctorsRepository]
})
export class DoctorsModule {}
