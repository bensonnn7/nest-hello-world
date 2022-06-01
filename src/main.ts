import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // create a Nest application instance
  // returns an application object
  // start up our HTTP listener,
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
