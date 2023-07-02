import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const db= require('../../ormPrisma/index.ts');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
