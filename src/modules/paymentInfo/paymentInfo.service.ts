import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentInfo } from 'src/entities/paymentInfo.entity';

@Injectable()
export class PaymentInfoService {
    constructor(
        @InjectRepository(PaymentInfo)
        private readonly paymentInfoRepo: Repository<PaymentInfo>,
    ) { }

    async AddPaymentInfo(paymentInfo: PaymentInfo): Promise<{success: boolean, message: string}> {
        try {
            const payment = this.paymentInfoRepo
            .create({
                'userId': paymentInfo.userId,
                'accountNumber': paymentInfo.accountNumber,
                'paymentType': paymentInfo.paymentType,
                'expiryDate': paymentInfo.expiryDate
            })
            await this.paymentInfoRepo.save(payment);

            return {
                success: true,
                message: 'Record added successfully.'
            }
        }
        catch (error) {
            if (error.code === '23505') {
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

    async GetPaymentInfoByUserId(UserId: string): Promise<PaymentInfo[]> {
        try {
            return this.paymentInfoRepo
                .createQueryBuilder('payment')
                .select([])
                .where('payment.userId = :UserId', { UserId: UserId })
                .getRawMany();
        }
        catch (error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetAllPaymentInfo(): Promise<PaymentInfo[]> {
        try {
            return this.paymentInfoRepo.find();
        }
        catch (error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async UpdatePaymentInfo(paymentInfo: PaymentInfo): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.paymentInfoRepo
            .update(
                {
                    'userId': paymentInfo.userId,
                    'accountNumber': paymentInfo.accountNumber
                },
                {
                    'paymentType': paymentInfo.paymentType,
                    'expiryDate': paymentInfo.expiryDate
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
        catch (error) {
            return {
                success: false,
                message: 'An error occured while updating the record.'
            }
        }
    }

    async RemovePaymentInfo(UserId: string, AccountNumber: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.paymentInfoRepo
                .createQueryBuilder()
                .delete().from(PaymentInfo)
                .where('userId = :UserId AND accountNumber = :AccountNumber', { UserId: UserId, AccountNumber: AccountNumber })
                .execute();

            if (result.affected === 0) {
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
        catch (error) {
            return {
                success: false,
                message: 'An error occured while deleting the record.'
            }
        }
    }
}