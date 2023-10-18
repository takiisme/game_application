import { Billing } from './billing.entity';
export declare class UserAccount {
    userId: string;
    fullName: string;
    email: string;
    username: string;
    password: string;
    billings: Billing[];
}
