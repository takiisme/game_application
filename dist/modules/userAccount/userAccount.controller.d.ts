import { UserAccount } from 'src/entities/userAccount.entity';
import { UserAccountService } from './userAccount.service';
export declare class UserAccountController {
    private readonly userAccountService;
    constructor(userAccountService: UserAccountService);
    GetAllUserAccount(): Promise<UserAccount[]>;
}
