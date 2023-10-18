import { Injectable} from "@nestjs/common";
import { InjectRepository} from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Billing } from "../../entities/billing.entity";

@Injectable()
export class BillingService {
    constructor(
        @InjectRepository(Billing)
        private readonly billingRepo: Repository<Billing>,
    ){}

    async AddBilling(billingInfo: Billing) {
        const billing = this.billingRepo.create({
            'billingId': billingInfo.billingId,
            'userId': billingInfo.userId,
            'timePurchase': billingInfo.timePurchase,
            'totalCost': billingInfo.totalCost
        })
        await this.billingRepo.save(billing);
    }

    async GetAllBilling() {
        return this.billingRepo.find();
    }

    async GetBillingById(Id: string) {
        return this.billingRepo.createQueryBuilder('billing')
            .select([]).where('billing.billingId =: Id', {Id: Id}).getRawMany();
    }

    async UpdateBilling(billingInfo: Billing) {
        await this.billingRepo.update(billingInfo.billingId, 
            {
                'userId': billingInfo.userId,
                'timePurchase': billingInfo.timePurchase,
                'totalCost': billingInfo.totalCost
            }
        );
    }

    async RemoveBilling(Id: string) {
        await this.billingRepo.createQueryBuilder()
        .delete().from(Billing).where('billingId = :Id', {Id: Id}).execute();
    }
}