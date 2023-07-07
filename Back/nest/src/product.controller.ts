import { Controller, Get, Post, Body,Param } from "@nestjs/common";
import { AppService } from './app.service';
console.log("hi");
const { prisma, getUsers, addUser,getOneUser } = require('../../ormPrisma/index.ts');
interface ParamsUser {
  userName:string
}
@Controller("user")
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

  @Post("addOne")
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
@Get("getOne/:userName")
async getOne(@Param() userName : ParamsUser):Promise<typeof data>{
  try {
    
    console.log(userName.userName);
    const user= await getOneUser(( userName.userName))
    return user
    
  } catch (error) {
    console.log(error);
    
  }
}
}
