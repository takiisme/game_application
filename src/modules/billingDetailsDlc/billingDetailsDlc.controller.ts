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
import { BillingDetailsDlc } from 'src/entities/billingDetailsDlc.entity';
import { BillingDetailsDlcService } from './billingDetailsDlc.service';

@Controller('billing_details_dlc')
export class BillingDetailsDlcController
{
    constructor (
        private readonly billingDetailsDlcService : BillingDetailsDlcService
    ){}

    @Post('add')
    async AddBillingDetailsDlc(
        @Body() billingInfoDlc: BillingDetailsDlc,
        @Res() response : Response
    ) {
        const {success, message} = await this.billingDetailsDlcService.AddBillingDetailsDlc(billingInfoDlc);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
    }

    @Get('getall')
    async GetAllBillingDetailsDlc() {
        return this.billingDetailsDlcService.GetAllBillingDetailsDlc();
    }

    @Get('get/:BillingId')
    async GetBillingDetailsDlcByBillingId(billingId: string) {
        return this.billingDetailsDlcService.GetBillingDetailDlcByBillingId(billingId);
    }

    @Get('get/:DlcId')
    async GetBillingDetailsDlcByDlcId(dlcId: string) {
        return this.billingDetailsDlcService.GetBillingDetailDlcByDlcId(dlcId);
    }

    @Put('update')
    async UpdateBillingDetailsDlc(
        @Body() billingInfoDlc: BillingDetailsDlc,
        @Res() response: Response
    ) {
        const {success, message} = await this.billingDetailsDlcService.UpdateBillingDetailsDlc(billingInfoDlc);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }

    @Delete('delete')
    async DeleteBillingDetailsDlc(
        @Body() billingInfoDlc: BillingDetailsDlc,
        @Res() response: Response
    ) {
        const {success, message} = await this.billingDetailsDlcService.RemoveBillingDetailsDlc(billingInfoDlc.billingId, billingInfoDlc.dlcId);
   
        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }
}