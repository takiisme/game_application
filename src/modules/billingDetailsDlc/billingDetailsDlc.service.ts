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

    async AddBillingDetailsDlc(billingInfoDlc: BillingDetailsDlc): Promise<{success: boolean, message: string}> {
        try {
            const billingDlc = this.billingDetailsDlcRepo
            .create({
                'billingId': billingInfoDlc.billingId,
                'dlcId': billingInfoDlc.dlcId,
                'priceWithDiscount': billingInfoDlc.priceWithDiscount,
                'serialKey': billingInfoDlc.serialKey
            })
            await this.billingDetailsDlcRepo.save(billingDlc);

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

    async GetAllBillingDetailsDlc(): Promise<BillingDetailsDlc[]> {
        try {
            return this.billingDetailsDlcRepo.find();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetBillingDetailDlcByBillingId(Id: string): Promise<BillingDetailsDlc[]> {
        try {
            return this.billingDetailsDlcRepo
            .createQueryBuilder('billing_details_dlc')
            .select([])
            .where('billing_detail_dlc.billingId = :Id', {Id: Id})
            .execute();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetBillingDetailDlcByDlcId(Id: string): Promise<BillingDetailsDlc[]> {
        try {
            return this.billingDetailsDlcRepo
            .createQueryBuilder('billing_details_dlc')
            .select([])
            .where('billing_detail_dlc.dlcId = :Id', {Id: Id})
            .execute();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async UpdateBillingDetailsDlc(billingInfoDlc: BillingDetailsDlc): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.billingDetailsDlcRepo
            .update({
                'billingId': billingInfoDlc.billingId,
                'dlcId': billingInfoDlc.dlcId
            }, 
            {
                'priceWithDiscount': billingInfoDlc.priceWithDiscount,
                'serialKey': billingInfoDlc.serialKey
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

    async RemoveBillingDetailsDlc(BillingId: string, DlcId: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.billingDetailsDlcRepo
            .createQueryBuilder()
            .delete()
            .from(BillingDetailsDlc)
            .where('billingId = :BillingId AND dlcId = :DlcId', {BillingId : BillingId, DlcId: DlcId})
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