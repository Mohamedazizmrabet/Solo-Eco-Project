import { Controller, Get, Post, Body,Param,BadRequestException } from "@nestjs/common";
import { AppService } from './app.service';
const { prisma, getUsers, addUser,getOneUser } = require('../../ormPrisma/index.ts');
interface ParamsUser {
  userName:string
  password:string
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
@Get("getOne/:userName/:password")
async getOne(@Param() OneUser : ParamsUser):Promise<typeof data>{
  try {
    
    console.log(OneUser.userName,OneUser.password);
    const user= await getOneUser( OneUser.userName,OneUser.password)
    console.log(user);
    
    return user
    
  } catch (error) {
    await prisma.$disconnect();
    throw new BadRequestException(error);
    
    
  }
}
}
