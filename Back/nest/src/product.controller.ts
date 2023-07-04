import { Controller, Get, Post, Body } from "@nestjs/common";
import { AppService } from './app.service';
const { prisma, getUsers, addUser } = require('../../ormPrisma/index.ts');

@Controller("product")
export class ProductController {
  constructor(private readonly appService: AppService) {}

  @Get("getAll")
  async getHello(): Promise<item> {
    try {
      const users = await getUsers();
      return users;
    } catch (error) {
      console.error(error);
      await prisma.$disconnect();
      process.exit(1);
    }
  }

  @Post()
  async create(@Body() body: item):Promise<string> {
    try {
      console.log(body); // Log the request body
      await addUser(body);
      await prisma.$disconnect();
      return 'user added successfully'
      
    } catch (error) {
      console.error(error);
      await prisma.$disconnect();
      process.exit(1);
    }
  }
}
