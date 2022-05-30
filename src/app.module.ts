import { Module } from '@nestjs/common';
import { DoctorsModule } from './doctors/doctors.module';
import { AppController } from './app.controller';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [DoctorsModule, AppointmentsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

