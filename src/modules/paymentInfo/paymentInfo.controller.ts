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
import { PaymentInfo } from 'src/entities/paymentInfo.entity';
import { PaymentInfoService } from './paymentInfo.service';

@Controller('payment_info')
export class PaymentInfoController {
    constructor (
        private readonly paymentInfoService : PaymentInfoService
    ) {}

    @Post('add')
    async AddPaymentInfo(
        @Body() payment: PaymentInfo,
        @Res() response: Response
    ) {
        const {success, message} = await this.paymentInfoService.AddPaymentInfo(payment);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
    }

    @Get('getall')
    async GetAllPaymentInfo() {
        return this.paymentInfoService.GetAllPaymentInfo();
    }

    @Get('get/:Id')
    async GetPaymentInfoByUserId(@Param('Id') Id: string) {
        return this.paymentInfoService.GetPaymentInfoByUserId(Id);
    }

    @Post('update')
    async UpdatePaymentInfo(
        @Body() payment: PaymentInfo,
        @Res() response: Response
    ) {
        const {success, message} = await this.paymentInfoService.UpdatePaymentInfo(payment);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }

    @Delete('delete')
    async DeletePaymentInfo(
        @Body() payment: PaymentInfo,
        @Res() response: Response
    ) {
        const {success, message} = await this.paymentInfoService.RemovePaymentInfo(payment.userId, payment.accountNumber);
        
        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }
}