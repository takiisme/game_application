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
import { Billing } from 'src/entities/billing.entity';
import { BillingService } from './billing.service';

@Controller('billing')
export class BillingController 
{
    constructor (
        private readonly billingService: BillingService
    ) {}

    @Post('add')
    async AddBilling(
        @Body() billingInfo: Billing,
    ) {
        return this.billingService.AddBilling(billingInfo);
    }

    @Get('getall')
    async GetAllBilling() {
        return this.billingService.GetAllBilling();
    }

    @Get('get/:Id')
    async GetBillingById(@Param('Id') Id:string) {
        return this.billingService.GetBillingById(Id);
    }

    @Put('update/:Id')
    async UpdateBilling(
        @Body() billingInfo: Billing,
    ) {
        return this.billingService.UpdateBilling(billingInfo);
    }

    @Delete('delete/:Id')
    async DeleteBillingById(@Param('Id') Id: string) {
        return this.billingService.RemoveBilling(Id);
    }
}