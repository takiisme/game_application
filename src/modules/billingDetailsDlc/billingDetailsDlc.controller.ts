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
    ) {
        return this.billingDetailsDlcService.AddBillingDetailsDlc(billingInfoDlc);
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
        @Body() billingInfoDlc: BillingDetailsDlc
    ) {
        return this.billingDetailsDlcService.UpdateBillingDetailsDlc(billingInfoDlc);
    }

    @Delete('delete')
    async DeleteBillingDetailsDlc(
        @Body() billingInfoDlc: BillingDetailsDlc
    ) {
        return this.billingDetailsDlcService.RemoveBillingDetailsDlc(billingInfoDlc.billingId, billingInfoDlc.dlcId);
    }
}