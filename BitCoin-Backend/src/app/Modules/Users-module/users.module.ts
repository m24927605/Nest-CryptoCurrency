'use strict';

import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../Modules/Users-module/Database/database.module';
import { UsersProviders } from '../Users-module/Providers/users.providers';
import { UsersServices } from '../Users-module/Services/users.service';
import { UsersController } from './Controllers/users.controller';

@Module({
    modules: [DatabaseModule],
    controllers: [UsersController],
    components: [
        UsersServices,
        ...UsersProviders
    ]
})

export class UsersModule { }