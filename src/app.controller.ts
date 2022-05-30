import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/health')
  getHealthcheck(): string {
    return 'Up';
  }
}
