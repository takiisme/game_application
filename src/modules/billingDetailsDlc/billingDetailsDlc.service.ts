import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BillingDetailsDlc } from 'src/entities/billingDetailsDlc.entity';

@Injectable()
export class BillingDetailsDlcService {
    constructor(
        @InjectRepository(BillingDetailsDlc)
        private readonly billingDetailsDlcRepo: Repository<BillingDetailsDlc>,
    ) { }

    async AddBillingDetailsDlc(billingInfoDlc: BillingDetailsDlc) {
        const billingDlc = this.billingDetailsDlcRepo.create({
            'billingId': billingInfoDlc.billingId,
            'dlcId': billingInfoDlc.dlcId,
            'priceWithDiscount': billingInfoDlc.priceWithDiscount,
            'serialKey': billingInfoDlc.serialKey
        })
        await this.billingDetailsDlcRepo.save(billingDlc);
    }

    async GetAllBillingDetailsDlc() {
        return this.billingDetailsDlcRepo.find();
    }

    async GetBillingDetailDlcByBillingId(Id: string) {
        return this.billingDetailsDlcRepo.createQueryBuilder('billing_details_dlc')
            .select([]).where('billing_detail_dlc.billingId = :Id', {Id: Id}).execute();
    }

    async GetBillingDetailDlcByDlcId(Id: string) {
        return this.billingDetailsDlcRepo.createQueryBuilder('billing_details_dlc')
            .select([]).where('billing_detail_dlc.dlcId = :Id', {Id: Id}).execute();
    }

    async UpdateBillingDetailsDlc(billingInfoDlc: BillingDetailsDlc) {
        await this.billingDetailsDlcRepo.update({
            'billingId': billingInfoDlc.billingId,
            'dlcId': billingInfoDlc.dlcId
        }, 
        {
            'priceWithDiscount': billingInfoDlc.priceWithDiscount,
            'serialKey': billingInfoDlc.serialKey
        }
        ); 
    }

    async RemoveBillingDetailsDlc(BillingId: string, DlcId: string) {
        await this.billingDetailsDlcRepo.createQueryBuilder().delete().from(BillingDetailsDlc)
            .where('billingId = :BillingId AND dlcId = :DlcId', {BillingId : BillingId, DlcId: DlcId}).execute();
    }
}