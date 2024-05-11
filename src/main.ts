/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Teacher Rating API')
    .setDescription('An API where students may rate their classes and teacher while interacting with the community to improve class choices.')
    .setVersion('1.0')
    .addTag('users')
    // to add more tags -> add another .addTag('categorized endpoints')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); 

  await app.listen(3000);
}
bootstrap();
