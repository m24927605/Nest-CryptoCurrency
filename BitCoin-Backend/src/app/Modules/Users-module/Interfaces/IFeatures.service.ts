'use strict';

import { Features } from '../Entities/Features';
import { IFeatures } from './IFeatures';

export interface IFeaturesService {
    findAll(): Promise<Array<Features>>;
    findById(ID: number): Promise<Features | null>;
    findOne(options: Object): Promise<Features | null>;
    create(roles: IFeatures): Promise<Features>;
    update(ID: number, newValue: IFeatures): Promise<Features | null>;
    delete(ID: number): Promise<number>;
}