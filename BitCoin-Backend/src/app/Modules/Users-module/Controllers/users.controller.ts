'use strict';

import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { UsersServices } from '../Services/users.service';
import { UsersDTO } from '../DTO/index';
import * as moment from 'moment';

@Controller('users')
export class UsersController {

    constructor(private readonly usersServices: UsersServices) { }

    @Get()
    public async getUsers( @Response() res) {
        const users = await this.usersServices.findAll();
        return res.status(HttpStatus.OK).json(users);
    }

    @Get('/find')
    public async findUser( @Response() res) {
        //給定where條件
        let queryCondition = { where: { Name: 'Mary' } };
        const users = await this.usersServices.findOne(queryCondition);
        return res.status(HttpStatus.OK).json(users);
    }

    @Get('/:ID')
    public async getUser( @Response() res, @Param() param) {

        const users = await this.usersServices.findById(param.id);
        return res.status(HttpStatus.OK).json(users);
    }

    @Post()
    public async createUser( @Response() res, @Body() usersDTO: UsersDTO) {
        usersDTO.CreateTime =moment().toDate();
        usersDTO.CreateUser = 'sa';
        const users = await this.usersServices.create(usersDTO);
        return res.status(HttpStatus.OK).json(users);
    }

    @Patch('/:ID')
    public async updateUser( @Param() param, @Response() res, @Body() usersDTO: UsersDTO) {
        usersDTO.ModifiedTime=moment().toDate();
        usersDTO.CreateUser = 'sa';
        const users = await this.usersServices.update(param.ID, usersDTO);
        return res.status(HttpStatus.OK).json(users);
    }

    @Delete('/:ID')
    public async deleteUser( @Param() param, @Response() res) {

        const users = await this.usersServices.delete(param.ID);
        return res.status(HttpStatus.OK).json(users);
    }
}