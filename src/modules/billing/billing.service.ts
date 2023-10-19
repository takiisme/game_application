import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Billing } from "../../entities/billing.entity";

@Injectable()
export class BillingService {
    constructor(
        @InjectRepository(Billing)
        private readonly billingRepo: Repository<Billing>,
    ) { }

    async AddBilling(billingInfo: Billing): Promise<{ success: boolean, message: string }> {
        try {
            const billing = this.billingRepo
            .create({
                'billingId': billingInfo.billingId,
                'userId': billingInfo.userId,
                'timePurchase': billingInfo.timePurchase,
                'totalCost': billingInfo.totalCost
            })
            await this.billingRepo.save(billing);

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

    async GetAllBilling(): Promise<Billing[]> {
        try {
            return this.billingRepo.find();
        }
        catch (error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetBillingById(Id: string): Promise<Billing[]> {
        try {
            return this.billingRepo
                .createQueryBuilder('billing')
                .select([])
                .where('billing.billingId =: Id', { Id: Id })
                .getRawMany();
        }
        catch (error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async UpdateBilling(billingInfo: Billing): Promise<{ success: boolean, message: string }> {
        try {
            const result = await this.billingRepo
            .update(billingInfo.billingId,
                {
                    'userId': billingInfo.userId,
                    'timePurchase': billingInfo.timePurchase,
                    'totalCost': billingInfo.totalCost
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

    async RemoveBilling(Id: string): Promise<{ success: boolean, message: string }> {
        try {
            const result = await this.billingRepo
                .createQueryBuilder()
                .delete()
                .from(Billing)
                .where('billingId = :Id', { Id: Id })
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