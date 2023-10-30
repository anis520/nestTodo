import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('')
  getAllBooks(): string {
    return 'hello todo';
  }
}
