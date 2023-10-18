import { BillingDetailsDlc } from 'src/entities/billingDetailsDlc.entity';
import { BillingDetailsDlcService } from './billingDetailsDlc.service';
export declare class BillingDetailsDlcController {
    private readonly billingDetailsDlcService;
    constructor(billingDetailsDlcService: BillingDetailsDlcService);
    GetAllBillingDetailsDlc(): Promise<BillingDetailsDlc[]>;
}
