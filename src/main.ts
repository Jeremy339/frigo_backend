import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  ///CORS
  app.enableCors();

  //Class Validator
  app.useGlobalPipes(new ValidationPipe({
    transform: true,  // Transforma los datos de la solicitud según el tipo del DTO
    whitelist: true,  // Elimina las propiedades que no están definidas en el DTO
    forbidNonWhitelisted: true,  // Lanza una excepción si la solicitud tiene propiedades no definidas en el DTO
  }));

  await app.listen(3000);
}
bootstrap();
