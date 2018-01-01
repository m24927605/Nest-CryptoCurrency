'use strict';

import { LoginHistory } from '../Entities/LoginHistory';
import { ILoginHistory } from './ILoginHistory';

export interface ILoginHistoryService {
    findAll(): Promise<Array<LoginHistory>>;
    findById(ID: number): Promise<LoginHistory | null>;
    findOne(options: Object): Promise<LoginHistory | null>;
    create(loginHistory: ILoginHistory): Promise<LoginHistory>;
    update(ID: number, newValue: ILoginHistory): Promise<LoginHistory | null>;
    delete(ID: number): Promise<number>;
}