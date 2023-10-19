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
        @Res() response: Response
    ) {
        const {success, message} = await this.billingService.AddBilling(billingInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
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
        @Res() response: Response
    ) {
        const {success, message} = await this.billingService.UpdateBilling(billingInfo);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }

    @Delete('delete/:Id')
    async DeleteBillingById(
        @Param('Id') Id: string,
        @Res() response: Response
    ) {
        const {success, message} = await this.billingService.RemoveBilling(Id);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }
}