import { Repository } from 'typeorm';
import { UserAccount } from 'src/entities/userAccount.entity';
export declare class UserAccountService {
    private readonly userAccountRepo;
    constructor(userAccountRepo: Repository<UserAccount>);
    GetAllUserAccount(): Promise<UserAccount[]>;
}
