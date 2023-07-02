import { Controller, Get,Post } from "@nestjs/common";
import { AppService } from './app.service';
const db= require('../../ormPrisma/index.ts');

@Controller("product")
export class ProductController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return "hello from product";
  }
  
}
