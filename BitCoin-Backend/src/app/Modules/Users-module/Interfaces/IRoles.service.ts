'use strict';

import { Roles } from '../Entities/Roles';
import { IRoles } from './IRoles';

export interface IRolesService {
    findAll(): Promise<Array<Roles>>;
    findById(ID: number): Promise<Roles | null>;
    findOne(options: Object): Promise<Roles | null>;
    create(roles: IRoles): Promise<Roles>;
    update(ID: number, newValue: IRoles): Promise<Roles | null>;
    delete(ID: number): Promise<number>;
}