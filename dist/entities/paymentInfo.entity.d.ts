import { UserAccount } from './userAccount.entity';
export declare class PaymentInfo {
    userId: string;
    accountNumber: string;
    paymentType: string;
    expiryDate: Date;
    userAccount: UserAccount;
}
