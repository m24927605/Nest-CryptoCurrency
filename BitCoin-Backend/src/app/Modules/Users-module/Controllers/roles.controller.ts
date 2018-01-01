'use strict';

import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { RolesService } from '../Services/roles.service';
import { RolesDTO } from '../DTO/index';
import * as moment from 'moment';

@Controller('roles')
export class RolesController {

    constructor(private readonly rolesService: RolesService) { }

    @Get()
    public async getRoles( @Response() res) {
        const roles = await this.rolesService.findAll();
        return res.status(HttpStatus.OK).json(roles);
    }

    @Get('/find')
    public async findRole( @Response() res) {
        //給定where條件
        let queryCondition = { where: { Name: 'VIP' } };
        const roles = await this.rolesService.findOne(queryCondition);
        return res.status(HttpStatus.OK).json(roles);
    }

    @Get('/:ID')
    public async getRole( @Response() res, @Param() param) {

        const roles = await this.rolesService.findById(param.id);
        return res.status(HttpStatus.OK).json(roles);
    }

    @Post()
    public async createRole( @Response() res, @Body() rolesDTO: RolesDTO) {
        rolesDTO.CreateTime = moment().toDate();
        rolesDTO.CreateUser = 'sa';
        const roles = await this.rolesService.create(rolesDTO);
        return res.status(HttpStatus.OK).json(roles);
    }

    @Patch('/:ID')
    public async updateRole( @Param() param, @Response() res, @Body() rolesDTO: RolesDTO) {
        rolesDTO.ModifiedTime = moment().toDate();
        rolesDTO.ModifiedUser = 'sa';
        const roles = await this.rolesService.update(param.ID, rolesDTO);
        return res.status(HttpStatus.OK).json(roles);
    }

    @Delete('/:ID')
    public async deleteRole( @Param() param, @Response() res) {

        const roles = await this.rolesService.delete(param.ID);
        return res.status(HttpStatus.OK).json(roles);
    }
}