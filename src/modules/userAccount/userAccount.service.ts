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

    async AddUserAccount(userAccountInfo: UserAccount): Promise<{success: boolean, message: string}> {
        try {
            const userAccount = this.userAccountRepo
            .create({
                'userId': userAccountInfo.userId,
                'fullName': userAccountInfo.fullName,
                'email': userAccountInfo.email,
                'username': userAccountInfo.username,
                'password': userAccountInfo.password
            })
            await this.userAccountRepo.save(userAccount);

            return {
                success: true,
                message: 'Record added successfully.'
            }
        }
        catch(error) {
            if(error.code === '23505') {
                return {
                    success: false,
                    message: "Record ID is taken already."
                }
            }

            return {
                success: false,
                message: "An error occured while adding the record."
            }
        }
    }

    async GetUserAccountById(Id: string): Promise<UserAccount[]> {
        try {
            return this.userAccountRepo
            .createQueryBuilder('user_account')
            .select([])
            .where('user_account.userId = :Id', {Id: Id})
            .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetAllUserAccount(): Promise<UserAccount[]> {
        try {
            return this.userAccountRepo.find();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async UpdateUserAccount(userAccountInfo: UserAccount): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.userAccountRepo
            .update(userAccountInfo.userId,
                {
                    'fullName': userAccountInfo.fullName,
                    'email': userAccountInfo.email,
                    'username': userAccountInfo.username,
                    'password': userAccountInfo.password
                }    
            );

            if (result.affected === 0) {
                return {
                    success: false,
                    message: 'Record Id does not exist.'
                }
            }
            else {
                return {
                    success: true,
                    message: 'Record updated successfully.'
                }
            }
        }
        catch(error) {
            return {
                success: false,
                message: 'An error occured while updating the record.'
            }
        }
    }

    async RemoveUserAccount(Id: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.userAccountRepo
            .createQueryBuilder()
            .delete()
            .from(UserAccount)
            .where('userId = :Id', {Id: Id})
            .execute();

            if(result.affected === 0) {
                return {
                    success: false,
                    message: 'Record Id does not exist.'
                }
            }
            else {
                return {
                    success: true,
                    message: 'Record deleted successfully.'
                }
            }
        }
        catch(error) {
            return {
                success: false,
                message: 'An error occured while deleting the record.'
            }
        }
    }
}