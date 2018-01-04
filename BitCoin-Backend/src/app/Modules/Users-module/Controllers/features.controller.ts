'use strict';

import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { FeaturesSerice } from '../Services/features.service';
import { FeaturesDTO } from '../DTO/index';
import * as moment from 'moment';

@Controller('features')
export class FeaturesController {

    constructor(private readonly featuresSerice: FeaturesSerice) { }

    @Get()
    public async getRoles( @Response() res) {
        const features = await this.featuresSerice.findAll();
        return res.status(HttpStatus.OK).json(features);
    }

    @Get('/find')
    public async findRole( @Response() res) {
        //給定where條件
        let queryCondition = { where: { Name: 'VIP' } };
        const features = await this.featuresSerice.findOne(queryCondition);
        return res.status(HttpStatus.OK).json(features);
    }

    @Get('/:ID')
    public async getRole( @Response() res, @Param() param) {

        const features = await this.featuresSerice.findById(param.ID);
        return res.status(HttpStatus.OK).json(features);
    }

    @Post()
    public async createRole( @Response() res, @Body() featuresDTO: FeaturesDTO) {
        featuresDTO.CreateTime = moment().toDate();
        featuresDTO.CreateUser = 'sa';
        const features = await this.featuresSerice.create(featuresDTO);
        return res.status(HttpStatus.OK).json(features);
    }

    @Patch('/:ID')
    public async updateRole( @Param() param, @Response() res, @Body() featuresDTO: FeaturesDTO) {
        featuresDTO.ModifiedTime = moment().toDate();
        featuresDTO.ModifiedUser = 'sa';
        const features = await this.featuresSerice.update(param.ID, featuresDTO);
        return res.status(HttpStatus.OK).json(features);
    }

    @Delete('/:ID')
    public async deleteRole( @Param() param, @Response() res) {

        const features = await this.featuresSerice.delete(param.ID);
        return res.status(HttpStatus.OK).json(features);
    }
}