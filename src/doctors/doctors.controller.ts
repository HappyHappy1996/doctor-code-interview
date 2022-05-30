import { Controller, Get, Param } from '@nestjs/common';
import { DoctorsService } from './doctors.service';

@Controller('doctors')
export class DoctorsController {
  constructor(
    private readonly doctorsService: DoctorsService,
  ) {}

  @Get()
  findAll() {
    return this.doctorsService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.doctorsService.findOne(name);
  }
}
