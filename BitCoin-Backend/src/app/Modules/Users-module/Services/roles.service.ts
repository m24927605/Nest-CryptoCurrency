'use strict';

import { Component, Inject } from '@nestjs/common';
import { Roles } from '../Entities/Roles';
import { IRoles, IRolesService } from '../Interfaces/index';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Component()
export class RolesService implements IRolesService {
    constructor(
        @InjectRepository(Roles)
        private readonly rolesRepository: Repository<Roles>) { }

    public async findAll(): Promise<Array<Roles>> {
        return await this.rolesRepository.find();
    }

    //findOne()可以加入各種option，以下示範常見的where
    //注意findOne() 找到一筆就會立即return data，不會繼續往下找。
    public async findOne(options: Object): Promise<Roles | null> {
        return await this.rolesRepository.findOne(options);
    }

    //restful API很常用。
    public async findById(ID): Promise<Roles | null> {
        return await this.rolesRepository.findOneById(ID);
    }

    public async create(roles: IRoles): Promise<Roles> {
        return await this.rolesRepository.save(roles);
    }

    public async update(ID: number, newValue: IRoles): Promise<Roles | null> {
        //先找出單筆資料
        let role = await this.rolesRepository.findOneById(ID);
        //該筆資料不存在
        if (!role.ID) {
            console.error("roles doesn't exist");
        }
        //呼叫role Model的方法
        await this.rolesRepository.updateById(ID, newValue);
        return await this.rolesRepository.findOneById(ID);
    }

    public async delete(ID: number): Promise<number> {
        //成功會回傳1，失敗回傳0
        await this.rolesRepository.deleteById(ID);
        let role = await this.rolesRepository.findOneById(ID);
        if (!role) {
            //刪除成功
            return 1;
        }
        else {
            //刪除失敗
            return 0;
        }
    }
}