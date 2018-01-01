'use strict';

import { Component, Inject } from '@nestjs/common';
import { Features } from '../Entities/Features';
import { IFeatures, IFeaturesService } from '../Interfaces/index';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Component()
export class FeaturesSerice implements IFeaturesService {
    constructor(
        @InjectRepository(Features)
        private readonly featuresRepository: Repository<Features>) { }

    public async findAll(): Promise<Array<Features>> {
        return await this.featuresRepository.find();
    }

    //findOne()可以加入各種option，以下示範常見的where
    //注意findOne() 找到一筆就會立即return data，不會繼續往下找。
    public async findOne(options: Object): Promise<Features | null> {
        return await this.featuresRepository.findOne(options);
    }

    //restful API很常用。
    public async findById(ID): Promise<Features | null> {
        return await this.featuresRepository.findOneById(ID);
    }

    public async create(features: IFeatures): Promise<Features> {
        return await this.featuresRepository.save(features);
    }

    public async update(ID: number, newValue: IFeatures): Promise<Features | null> {
        //先找出單筆資料
        let feature = await this.featuresRepository.findOneById(ID);
        //該筆資料不存在
        if (!feature.ID) {
            console.error("features doesn't exist");
        }
        //呼叫feature Model的方法
        await this.featuresRepository.updateById(ID, newValue);
        return await this.featuresRepository.findOneById(ID);
    }

    public async delete(ID: number): Promise<number> {
        //成功會回傳1，失敗回傳0
        await this.featuresRepository.deleteById(ID);
        let feature = await this.featuresRepository.findOneById(ID);
        if (!feature) {
            //刪除成功
            return 1;
        }
        else {
            //刪除失敗
            return 0;
        }
    }
}