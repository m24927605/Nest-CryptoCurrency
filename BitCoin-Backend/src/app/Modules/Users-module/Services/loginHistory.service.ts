'use strict';

import { Component, Inject } from '@nestjs/common';
import { LoginHistory } from '../Entities/LoginHistory';
import { ILoginHistory,ILoginHistoryService } from '../Interfaces/index';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Component()
export class LoginsHistoryService implements ILoginHistoryService {
    constructor(
        @InjectRepository(LoginHistory)
        private readonly loginHistoryRepository: Repository<LoginHistory>) { }

    public async findAll(): Promise<Array<LoginHistory>> {
        return await this.loginHistoryRepository.find();
    }

    //findOne()可以加入各種option，以下示範常見的where
    //注意findOne() 找到一筆就會立即return data，不會繼續往下找。
    public async findOne(options: Object): Promise<LoginHistory | null> {
        return await this.loginHistoryRepository.findOne(options);
    }

    //restful API很常用。
    public async findById(ID): Promise<LoginHistory | null> {
        return await this.loginHistoryRepository.findOneById(ID);
    }

    public async create(loginHistory: ILoginHistory): Promise<LoginHistory> {
        return await this.loginHistoryRepository.save(loginHistory);
    }

    public async update(ID: number, newValue: ILoginHistory): Promise<LoginHistory | null> {
        //先找出單筆資料
        let loginHistory = await this.loginHistoryRepository.findOneById(ID);
        //該筆資料不存在
        if (!loginHistory.ID) {
            console.error("loginHistory doesn't exist");
        }
        //呼叫feature Model的方法
        await this.loginHistoryRepository.updateById(ID, newValue);
        return await this.loginHistoryRepository.findOneById(ID);
    }

    public async delete(ID: number): Promise<number> {
        //成功會回傳1，失敗回傳0
        await this.loginHistoryRepository.deleteById(ID);
        let loginHistory = await this.loginHistoryRepository.findOneById(ID);
        if (!loginHistory) {
            //刪除成功
            return 1;
        }
        else {
            //刪除失敗
            return 0;
        }
    }
}