import { UserAccount } from './userAccount.entity';
export declare class Billing {
    billingId: number;
    userId: string;
    timePurchase: Date;
    totalCost: number;
    userAccount: UserAccount;
}
