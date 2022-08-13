import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from '@src/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('content-type', 'application/json')
  getOpenApi(): string {
    return this.appService.getOpenApiJson();
  }
}
