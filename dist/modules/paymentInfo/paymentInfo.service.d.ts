import { Repository } from 'typeorm';
import { PaymentInfo } from 'src/entities/paymentInfo.entity';
export declare class PaymentInfoService {
    private readonly paymentInfoRepo;
    constructor(paymentInfoRepo: Repository<PaymentInfo>);
    GetAllPaymentInfo(): Promise<PaymentInfo[]>;
}
