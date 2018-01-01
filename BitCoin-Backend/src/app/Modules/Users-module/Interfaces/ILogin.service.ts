'use strict';

import { Login } from '../Entities/Login';
import { ILogin } from './ILogin';

export interface ILoginService {
    findAll(): Promise<Array<Login>>;
    findById(ID: number): Promise<Login | null>;
    findOne(options: Object): Promise<Login | null>;
    create(roles: ILogin): Promise<Login>;
    update(ID: number, newValue: ILogin): Promise<Login | null>;
    delete(ID: number): Promise<number>;
}