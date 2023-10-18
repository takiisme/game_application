import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Delete,
    Put,
    Res,
    ValidationPipe,
} from '@nestjs/common';
import { ParamsTokenFactory } from '@nestjs/core/pipes';
import { response } from 'express';
import { DeleteDateColumn } from 'typeorm';
import { Developer } from 'src/entities/developer.entity';
import { DeveloperService } from './developer.service';

@Controller('developer') 
export class DeveloperController 
{
    constructor (
        private readonly developerService: DeveloperService
    ) {}

    @Post('add')
    async AddDeveloper(
        @Body() developerInfo: Developer,
    ) {
        return this.developerService.AddDeveloper(developerInfo);
    }

    @Get('getall')
    async GetAllDevelopers() {
        return this.developerService.GetAllDevelopers();
    }

    @Get('get/:Id')
    async GetDeveloperById(@Param('Id') Id: string) {
        return this.developerService.GetDeveloperById(Id);
    }

    @Put('update/:Id')
    async UpdateDeveloper(
        @Body() developerInfo: Developer,
    ) {
        return this.developerService.UpdateDeveloper(developerInfo);
    }

    @Delete('delete/:Id')
    async DeleteDeveloperById(@Param('Id') Id: string) {
        return this.developerService.RemoveDeveloper(Id);
    }
}