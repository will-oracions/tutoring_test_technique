import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 9901;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
