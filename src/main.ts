import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { getConnectionOptions } from 'typeorm';
import { runMigrations } from './db/setup';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT || 9901;

  const app = await NestFactory.create(
    AppModule.forRoot(await getConnectionOptions(process.env.NODE_ENV)),
  );

  const config = new DocumentBuilder()
    .setTitle('Technical test API')
    .setDescription(
      'This is a quick documentation for the test, just to see the endpoints',
    )
    .setVersion('1.0')
    .addTag('Test')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('doc', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT);

  await runMigrations();

  Logger.log(`Server is running on port ${PORT}`);
}
bootstrap();
