import { Controller, Get } from '@nestjs/common';
@Controller()
export class AppController {
  @Get()
  getOpenApi(): string {
    return 'Hello, world!';
  }
}
