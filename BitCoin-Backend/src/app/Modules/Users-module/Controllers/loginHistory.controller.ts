'use strict';

import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { LoginsHistoryService } from '../Services/index';
import { LoginHistoryDTO } from '../DTO/index';
import * as moment from 'moment';

@Controller('loginHistory')
export class LoginHistoryController {

    constructor(private readonly loginHistoryService: LoginsHistoryService) { }

    @Get()
    public async getRoles( @Response() res) {
        const loginHistory = await this.loginHistoryService.findAll();
        return res.status(HttpStatus.OK).json(loginHistory);
    }

    @Get('/find')
    public async findRole( @Response() res) {
        //給定where條件
        let queryCondition = { where: { UserID: 1} };
        const loginHistory = await this.loginHistoryService.findOne(queryCondition);
        return res.status(HttpStatus.OK).json(loginHistory);
    }

    @Get('/:ID')
    public async getRole( @Response() res, @Param() param) {

        const loginHistory = await this.loginHistoryService.findById(param.id);
        return res.status(HttpStatus.OK).json(loginHistory);
    }

    @Post()
    public async createRole( @Response() res, @Body() LoginHistoryDTO: LoginHistoryDTO) {
        LoginHistoryDTO.CreateTime = moment().toDate();
        LoginHistoryDTO.CreateUser = 'sa';
        const loginHistory = await this.loginHistoryService.create(LoginHistoryDTO);
        return res.status(HttpStatus.OK).json(loginHistory);
    }

    @Patch('/:ID')
    public async updateRole( @Param() param, @Response() res, @Body() LoginHistoryDTO: LoginHistoryDTO) {
        LoginHistoryDTO.ModifiedTime = moment().toDate();
        LoginHistoryDTO.ModifiedUser = 'sa';
        const loginHistory = await this.loginHistoryService.update(param.ID, LoginHistoryDTO);
        return res.status(HttpStatus.OK).json(loginHistory);
    }

    @Delete('/:ID')
    public async deleteRole( @Param() param, @Response() res) {

        const loginHistory = await this.loginHistoryService.delete(param.ID);
        return res.status(HttpStatus.OK).json(loginHistory);
    }
}