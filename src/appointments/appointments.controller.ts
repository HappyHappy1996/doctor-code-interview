import { Controller, Get, Post, Body, Query, BadRequestException, HttpCode } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { isValidDate } from '../utils';

@Controller('appointments')
export class AppointmentsController {
  constructor(
    private readonly appointmentsService: AppointmentsService,
  ) {}

  @Post()
  @HttpCode(200)
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    const isAvailable = this.appointmentsService.isAvailable(createAppointmentDto);

    if (!isAvailable) {
      throw new BadRequestException();
    }

    // logic to book an appointment
  }

  @Get()
  findRelevantDoctors(
    @Query('specialty') specialty: string,
    @Query('date') date: number,
    @Query('minScore') minScore: number,
  ): string[] {
    // ideally we should use pipes for that
    if (!specialty || !isValidDate(date)) {
      throw new BadRequestException();
    }

    return this.appointmentsService.findRelevant({
      specialty,
      date: +date,
      minScore: +minScore,
    });
  }
}
