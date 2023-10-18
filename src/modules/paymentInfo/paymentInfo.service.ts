import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentInfo } from 'src/entities/paymentInfo.entity';

@Injectable()
export class PaymentInfoService {
    constructor(
        @InjectRepository(PaymentInfo)
        private readonly paymentInfoRepo: Repository<PaymentInfo>,
    ) {}

    async AddPaymentInfo(paymentInfo: PaymentInfo) {
        const payment = this.paymentInfoRepo.create({
            'userId': paymentInfo.userId,
            'accountNumber': paymentInfo.accountNumber,
            'paymentType': paymentInfo.paymentType,
            'expiryDate': paymentInfo.expiryDate
        })
        await this.paymentInfoRepo.save(payment);
    }

    async GetPaymentInfoByUserId(UserId: string) {
        return this.paymentInfoRepo.createQueryBuilder('payment')
            .select([]).where('payment.userId = :UserId', {UserId: UserId}).getRawMany();
    }

    async GetAllPaymentInfo() {
        return this.paymentInfoRepo.find();
    }

    async UpdatePaymentInfo(paymentInfo: PaymentInfo) {
        await this.paymentInfoRepo.update(
            {
                'userId': paymentInfo.userId,
                'accountNumber': paymentInfo.accountNumber
            },
            {
                'paymentType': paymentInfo.paymentType,
                'expiryDate': paymentInfo.expiryDate
            }
        );
    }

    async RemovePaymentInfo(UserId: string, AccountNumber: string) {
        await this.paymentInfoRepo.createQueryBuilder()
            .delete().from(PaymentInfo).where('userId = :UserId AND accountNumber = :AccountNumber', {UserId: UserId, AccountNumber: AccountNumber}).execute();
    }
}