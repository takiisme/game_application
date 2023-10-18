import { Billing } from 'src/entities/billing.entity';
import { BillingService } from './billing.service';
export declare class BillingController {
    private readonly billingService;
    constructor(billingService: BillingService);
    GetAllBilling(): Promise<Billing[]>;
    GetBillingById(Id: string): Promise<any[]>;
}
