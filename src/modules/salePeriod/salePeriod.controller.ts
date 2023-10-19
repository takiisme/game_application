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
import { SalePeriod } from 'src/entities/salePeriod.entity';
import { SalePeriodService } from './salePeriod.service';

@Controller('sale_period')
export class SalePeriodController 
{
    constructor(
        private readonly salePeriodService : SalePeriodService
    ) {}

    @Post('add')
    async AddSalePeriod(
        @Body() salePeriodInfo: SalePeriod,
        @Res() response: Response
    ) {
        const {success, message} = await this.salePeriodService.AddSalePeriod(salePeriodInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
    }

    @Get('getall')
    async GetAllSalePeriod() {
        return this.salePeriodService.GetAllSalePeriod();
    }

    @Get('get/:Id')
    async GetSalePeriodById(@Param('Id') Id: string) {
        return this.salePeriodService.GetSalePeriodById(Id);
    }

    @Put('update')
    async UpdateSalePeriod(
        @Body() salePeriodInfo: SalePeriod,
        @Res() response: Response
    ) {
        const {success, message} = await this.salePeriodService.UpdateSalePeriod(salePeriodInfo);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }

    @Delete('delete/:Id')
    async DeleteSalePeriod(
        @Param('Id') Id: string,
        @Res() response: Response
    ) {
        const {success, message} = await this.salePeriodService.RemoveSalePeriod(Id);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }
}