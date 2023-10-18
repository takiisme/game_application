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
        @Body() salePeriodInfo: SalePeriod
    ) {
        return this.salePeriodService.AddSalePeriod(salePeriodInfo);
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
        @Body() salePeriodInfo: SalePeriod
    ) {
        return this.salePeriodService.UpdateSalePeriod(salePeriodInfo);
    }

    @Delete('delete/:Id')
    async DeleteSalePeriod(@Param('Id') Id: string) {
        return this.salePeriodService.RemoveSalePeriod(Id);
    }
}