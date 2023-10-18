import { PaymentInfo } from 'src/entities/paymentInfo.entity';
import { PaymentInfoService } from './paymentInfo.service';
export declare class PaymentInfoController {
    private readonly paymentInfoService;
    constructor(paymentInfoService: PaymentInfoService);
    GetAllPaymentInfo(): Promise<PaymentInfo[]>;
}
