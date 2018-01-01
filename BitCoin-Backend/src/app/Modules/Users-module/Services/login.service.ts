'use strict';

import { Component, Inject } from '@nestjs/common';
import { Login } from '../Entities/Login';
import { ILogin, ILoginService } from '../Interfaces/index';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Component()
export class LoginsService implements ILoginService {
    constructor(
        @InjectRepository(Login)
        private readonly loginRepository: Repository<Login>) { }

    public async findAll(): Promise<Array<Login>> {
        return await this.loginRepository.find();
    }

    //findOne()可以加入各種option，以下示範常見的where
    //注意findOne() 找到一筆就會立即return data，不會繼續往下找。
    public async findOne(options: Object): Promise<Login | null> {
        return await this.loginRepository.findOne(options);
    }

    //restful API很常用。
    public async findById(ID): Promise<Login | null> {
        return await this.loginRepository.findOneById(ID);
    }

    public async create(login: ILogin): Promise<Login> {
        return await this.loginRepository.save(login);
    }

    public async update(ID: number, newValue: ILogin): Promise<Login | null> {
        //先找出單筆資料
        let feature = await this.loginRepository.findOneById(ID);
        //該筆資料不存在
        if (!feature.ID) {
            console.error("login doesn't exist");
        }
        //呼叫feature Model的方法
        await this.loginRepository.updateById(ID, newValue);
        return await this.loginRepository.findOneById(ID);
    }

    public async delete(ID: number): Promise<number> {
        //成功會回傳1，失敗回傳0
        await this.loginRepository.deleteById(ID);
        let feature = await this.loginRepository.findOneById(ID);
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