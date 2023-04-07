import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { urlencoded, json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(json({ limit: '50mb' })); //solution to add image #thanawat
  app.use(urlencoded({ extended: true, limit: '50mb' })); //solution to add image #thanawat
  const config = new DocumentBuilder()
    .setTitle('Schedule')
    .setDescription('This is API Schedule')
    .setVersion('1.0')
    .addTag('Schedule')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  app.useGlobalPipes(new ValidationPipe());
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(8080);
}
bootstrap();
