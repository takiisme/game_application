import { Repository } from "typeorm";
import { Billing } from "../../entities/billing.entity";
export declare class BillingService {
    private readonly billingRepo;
    constructor(billingRepo: Repository<Billing>);
    GetAllBilling(): Promise<Billing[]>;
    GetBillingById(Id: string): Promise<any[]>;
}
