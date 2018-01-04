'use strict';

import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { LoginsService } from '../Services/login.service';
import { LoginDTO } from '../DTO/index';
import * as moment from 'moment';

@Controller('login')
export class LoginController {

    constructor(private readonly loginSerice: LoginsService) { }

    @Get()
    public async getRoles( @Response() res) {
        const login = await this.loginSerice.findAll();
        return res.status(HttpStatus.OK).json(login);
    }

    @Get('/find')
    public async findRole( @Response() res) {
        //給定where條件
        let queryCondition = { where: { Account: 'test' } };
        const login = await this.loginSerice.findOne(queryCondition);
        return res.status(HttpStatus.OK).json(login);
    }

    @Get('/:ID')
    public async getRole( @Response() res, @Param() param) {

        const login = await this.loginSerice.findById(param.ID);
        return res.status(HttpStatus.OK).json(login);
    }

    @Post()
    public async createRole( @Response() res, @Body() loginDTO: LoginDTO) {
        loginDTO.CreateTime = moment().toDate();
        loginDTO.CreateUser = 'sa';
        const login = await this.loginSerice.create(loginDTO);
        return res.status(HttpStatus.OK).json(login);
    }

    @Patch('/:ID')
    public async updateRole( @Param() param, @Response() res, @Body() loginDTO: LoginDTO) {
        loginDTO.ModifiedTime = moment().toDate();
        loginDTO.ModifiedUser = 'sa';
        const login = await this.loginSerice.update(param.ID, loginDTO);
        return res.status(HttpStatus.OK).json(login);
    }

    @Delete('/:ID')
    public async deleteRole( @Param() param, @Response() res) {

        const login = await this.loginSerice.delete(param.ID);
        return res.status(HttpStatus.OK).json(login);
    }
}