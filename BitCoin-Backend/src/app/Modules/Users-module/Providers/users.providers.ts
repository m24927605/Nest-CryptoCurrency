'use strict';

import { Connection, Repository } from 'typeorm';
import { Features } from '../Entities/Features';
import { Login } from '../Entities/Login';
import { LoginHistory } from '../Entities/LoginHistory';
import { Roles } from '../Entities/Roles';
import { Users } from '../Entities/Users';

export const UsersProviders = [
    {
        provide: 'FeaturesRepository',
        useFactory: (connction: Connection) => connction.getRepository(Features),
        inject: ['TypeORMToken']
    },
    {
        provide: 'LoginRepository',
        useFactory: (connction: Connection) => connction.getRepository(Login),
        inject: ['TypeORMToken']
    },
    {
        provide: 'LoginHistoryRepository',
        useFactory: (connction: Connection) => connction.getRepository(LoginHistory),
        inject: ['TypeORMToken']
    },
    {
        provide: 'RolesRepository',
        useFactory: (connction: Connection) => connction.getRepository(Roles),
        inject: ['TypeORMToken']
    },
    {
        provide: 'UsersRepository',
        useFactory: (connction: Connection) => connction.getRepository(Users),
        inject: ['TypeORMToken']
    }

]