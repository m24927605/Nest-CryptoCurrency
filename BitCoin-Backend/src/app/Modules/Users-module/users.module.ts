'use strict';

import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../Modules/Users-module/Database/database.module';
import { UsersProviders } from '../Users-module/Providers/users.providers';
import { UsersController,RolesController,FeaturesController, LoginController,LoginHistoryController } from './Controllers/index';
import { RolesService,FeaturesSerice,UsersServices, LoginsService, LoginsHistoryService } from './Services/index';


@Module({
    modules: [DatabaseModule],
    controllers: [UsersController, RolesController, FeaturesController,LoginController,LoginHistoryController],
    components: [
        UsersServices,
        RolesService,
        FeaturesSerice,
        LoginsService,
        LoginsHistoryService,
        ...UsersProviders
    ]
})

export class UsersModule { }