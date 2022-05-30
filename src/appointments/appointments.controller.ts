import { Controller, Get, Post, Body, Query, Logger, BadRequestException } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Controller('appointments')
export class AppointmentsController {
  private readonly logger = new Logger(AppointmentsService.name)

  constructor(
    private readonly appointmentsService: AppointmentsService,
  ) {}

  // TODO: implement
  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentsService.findAll();
  }

  @Get()
  findRelevantDoctors(
    @Query('specialty') specialty: string,
    @Query('date') date: number,
    @Query('minScore') minScore: number,
  ): string[] {
    this.logger.log({
      specialty,
      date,
      minScore,
    });

    if (!specialty) {
      throw new BadRequestException();
    }

    return this.appointmentsService.findRelevant({
      specialty,
      date: +date,
      minScore: +minScore,
    });
  }
}
