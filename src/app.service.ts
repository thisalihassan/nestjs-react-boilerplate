import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class AppService {
  getOpenApiJson(): string {
    const readfile = readFileSync('swagger.json', {
      encoding: 'utf8',
      flag: 'r',
    });
    return readfile;
  }
}
