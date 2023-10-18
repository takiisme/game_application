import { Dlc } from './dlc.entity';
import { UserAccount } from './userAccount.entity';
export declare class DlcRating {
    userId: string;
    dlcId: string;
    ratingDate: Date;
    ratingStar: number;
    dlc: Dlc;
    userAccount: UserAccount;
}
