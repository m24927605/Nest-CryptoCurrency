'use strict';

import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../Modules/Users-module/Database/database.module';
import { UsersProviders } from '../Users-module/Providers/users.providers';
import { UsersController,RolesController,FeaturesController, LoginController } from './Controllers/index';
import { RolesService,FeaturesSerice,UsersServices, LoginsService } from './Services/index';


@Module({
    modules: [DatabaseModule],
    controllers: [UsersController, RolesController, FeaturesController,LoginController],
    components: [
        UsersServices,
        RolesService,
        FeaturesSerice,
        LoginsService,
        ...UsersProviders
    ]
})

export class UsersModule { }