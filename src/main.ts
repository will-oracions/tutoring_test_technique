import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { getConnectionOptions } from 'typeorm';
import { runMigrations } from './db/setup';

async function bootstrap() {
  const PORT = process.env.PORT || 9901;

  const app = await NestFactory.create(
    AppModule.forRoot(await getConnectionOptions(process.env.NODE_ENV)),
  );

  await app.listen(PORT);

  await runMigrations();

  Logger.log(`Server is running on port ${PORT}`);
}
bootstrap();
