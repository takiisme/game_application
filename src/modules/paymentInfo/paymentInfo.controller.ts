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
import { PaymentInfo } from 'src/entities/paymentInfo.entity';
import { PaymentInfoService } from './paymentInfo.service';

@Controller('payment_info')
export class PaymentInfoController {
    constructor (
        private readonly paymentInfoService : PaymentInfoService
    ) {}

    @Post('add')
    async AddPaymentInfo(
        @Body() payment: PaymentInfo
    ) {
        return this.paymentInfoService.AddPaymentInfo(payment);
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
        @Body() payment: PaymentInfo
    ) {
        return this.paymentInfoService.UpdatePaymentInfo(payment);
    }

    @Delete('delete')
    async DeletePaymentInfo(
        @Body() payment: PaymentInfo
    ) {
        return this.paymentInfoService.RemovePaymentInfo(payment.userId, payment.accountNumber);
    }
}