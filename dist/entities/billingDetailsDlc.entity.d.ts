import { Billing } from './billing.entity';
import { Dlc } from './dlc.entity';
export declare class BillingDetailsDlc {
    billingId: string;
    dlcId: string;
    priceWithDiscount: number;
    serialKey: string;
    billing: Billing;
    dlc: Dlc;
}
