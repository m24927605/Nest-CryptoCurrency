'use strict';

import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../Modules/Users-module/Database/database.module';
import { UsersProviders } from '../Users-module/Providers/users.providers';
import { UsersController } from './Controllers/users.controller';
import { RolesController } from './Controllers/roles.controller';
import { FeaturesController } from './Controllers/features.controller';
import { RolesService,FeaturesSerice,UsersServices } from './Services/index';


@Module({
    modules: [DatabaseModule],
    controllers: [UsersController, RolesController, FeaturesController],
    components: [
        UsersServices,
        RolesService,
        FeaturesSerice,
        ...UsersProviders
    ]
})

export class UsersModule { }