import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule],
  // controllers: [AppController],
  // Providers are plain JavaScript classes that are declared as providers in a module.
  // providers: [AppService],
})
export class AppModule {}
