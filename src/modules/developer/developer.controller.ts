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
import { Response } from 'express';
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
        @Res() response: Response
    ) {
        const {success, message} = await this.developerService.AddDeveloper(developerInfo);
        
        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
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
        @Res() response: Response
    ) {
        const {success, message} = await this.developerService.UpdateDeveloper(developerInfo);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }

    @Delete('delete/:Id')
    async DeleteDeveloperById(
        @Param('Id') Id: string,
        @Res() response: Response
    ) {
        const {success, message} = await this.developerService.RemoveDeveloper(Id);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }
}