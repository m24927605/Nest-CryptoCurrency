import { Module } from '@nestjs/common';
import { UsersModule } from './Modules/Users-module/users.module';

@Module({
  modules: [UsersModule]
})
export class ApplicationModule { }
