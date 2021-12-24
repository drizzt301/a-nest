import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

// req, res에 대해 알아요
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser() {
    console.log('hello');
    return this.appService.getHello();
  }
}
