'use strict';

import { createConnection } from 'typeorm';
import { Features } from '../../Users-module/Entities/Features';
import { Login } from '../../Users-module/Entities/Login';
import { LoginHistory } from '../../Users-module/Entities/LoginHistory';
import { Roles } from '../../Users-module/Entities/Roles';
import { Users } from '../../Users-module/Entities/Users';

export const databaseProviders = [
    {
        provide: 'TypeORMToken',
        useFactory: async () => await createConnection({
            type: 'mssql',
            host: 'localhost',
            port: 1433,
            username: 'sa',
            password: 'Aa123456',
            database: 'BitCoin',
            entities: [
                __dirname + '/../Entities/*{.ts,.js}'
            ]
        })
    }
]