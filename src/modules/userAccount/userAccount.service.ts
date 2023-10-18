import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAccount } from 'src/entities/userAccount.entity';

@Injectable()
export class UserAccountService {
    constructor(
        @InjectRepository(UserAccount)
        private readonly userAccountRepo : Repository<UserAccount>,
    ) {}

    async AddUserAccount(userAccountInfo: UserAccount) {
        const userAccount = this.userAccountRepo.create({
            'userId': userAccountInfo.userId,
            'fullName': userAccountInfo.fullName,
            'email': userAccountInfo.email,
            'username': userAccountInfo.username,
            'password': userAccountInfo.password
        })
        await this.userAccountRepo.save(userAccount);
    }

    async GetUserAccountById(Id: string) {
        return this.userAccountRepo.createQueryBuilder('user_account')
            .select([]).where('user_account.userId = :Id', {Id: Id}).getRawMany();
    }

    async GetAllUserAccount() {
        return this.userAccountRepo.find();
    }

    async UpdateUserAccount(userAccountInfo: UserAccount) {
        await this.userAccountRepo.update(userAccountInfo.userId,
            {
                'fullName': userAccountInfo.fullName,
                'email': userAccountInfo.email,
                'username': userAccountInfo.username,
                'password': userAccountInfo.password
            }    
        );
    }

    async RemoveUserAccount(Id: string) {
        await this.userAccountRepo.createQueryBuilder()
            .delete().from(UserAccount).where('userId = :Id', {Id: Id}).execute();
    }
}