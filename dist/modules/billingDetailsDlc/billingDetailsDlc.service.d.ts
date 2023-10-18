import { Repository } from 'typeorm';
import { BillingDetailsDlc } from 'src/entities/billingDetailsDlc.entity';
export declare class BillingDetailsDlcService {
    private readonly billingDetailsDlcRepo;
    constructor(billingDetailsDlcRepo: Repository<BillingDetailsDlc>);
    GetAllBillingDetailsDlc(): Promise<BillingDetailsDlc[]>;
}
