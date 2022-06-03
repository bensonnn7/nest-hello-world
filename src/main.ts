import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // create a Nest application instance
  // returns an application object
  // start up our HTTP listener,
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // transfer incoming data to dto instance
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
