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
import { SaleDetailsDlc } from 'src/entities/saleDetailsDlc.entity';
import { SaleDetailsDlcService } from './saleDetailsDlc.service';

@Controller('sale_details_dlc')
export class SaleDetailsDlcController {
    constructor(
        private readonly saleDetailsDlcService: SaleDetailsDlcService,
    ) { }

    @Post('add')
    async AddSaleDetailsDlc(
        @Body() saleDetailsDlcInfo: SaleDetailsDlc,
        @Res() response: Response
    ) {
        const {success, message} = await this.saleDetailsDlcService.AddSaleDetailsDlc(saleDetailsDlcInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
    }

    @Get('getall')
    async GetAllSaleDetailsDlc() {
        return this.saleDetailsDlcService.GetAllSaleDetailsDlc();
    }

    @Get('get/:Id')
    async GetSaleDetailsDlcByDlcId(@Param('Id') Id: string) {
        return this.saleDetailsDlcService.GetSaleDetailsDlcByDlcId(Id);
    }

    @Get('get/:Id')
    async GetSaleDetailsDlcBySaleId(@Param('Id') Id: string) {
        return this.saleDetailsDlcService.GetSaleDetailsDlcBySaleId(Id);
    }

    @Get('get/:Id')
    async GetSaleDetailsDlcByPeriodId(@Param('Id') Id: string) {
        return this.saleDetailsDlcService.GetSaleDetailsDlcByPeriodId(Id);
    }

    @Put('update')
    async UpdateSaleDetailsGame(
        @Body() saleDetailsDlcInfo: SaleDetailsDlc,
        @Res() response: Response
    ) {
        const {success, message} = await this.saleDetailsDlcService.UpdateSaleDetailsDlc(saleDetailsDlcInfo);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }

    @Delete('delete')
    async DeleteSaleDetailsGame(
        @Body() saleDetailsDlcInfo: SaleDetailsDlc,
        @Res() response: Response
    ) {
        const {success, message} = await this.saleDetailsDlcService.RemoveSaleDetailsDlc(saleDetailsDlcInfo.periodId.toString(), saleDetailsDlcInfo.dlcId);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }
}