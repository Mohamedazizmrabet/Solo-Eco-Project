import { Controller, Get, Post, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { Request } from "express";
import {add} from "../../ormPrisma/index.ts"
@Controller("product")
export class ProductController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return "hello from product";
  }

  @Post()
  create(@Req() req: Request): void {
    const raw = req.body;
    console.log(add);
    
//     add(req.body).then((response) => {
//       console.log(response);
// })
    console.log(raw);
  }
}
