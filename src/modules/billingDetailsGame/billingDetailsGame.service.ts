import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BillingDetailsGame } from "src/entities/billingDetailsGame.entity";

@Injectable()
export class BillingDetailsGameService {
    constructor(
        @InjectRepository(BillingDetailsGame)
        private readonly billingDetailsGameRepo: Repository<BillingDetailsGame>,
    ) { }

    async AddBillingDetailsGame(billingInfoGame: BillingDetailsGame): Promise<{success: boolean, message: string}> {
        try {
            const billingDlc = this.billingDetailsGameRepo
            .create({
                'billingId': billingInfoGame.billingId,
                'gameId': billingInfoGame.gameId,
                'priceWithDiscount': billingInfoGame.priceWithDiscount,
                'serialKey': billingInfoGame.serialKey
            })
            await this.billingDetailsGameRepo.save(billingDlc);

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

    async GetAllBillingDetailsGame(): Promise<BillingDetailsGame[]> {
        try {
            return this.billingDetailsGameRepo.find();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetBillingDetailGameByBillingId(Id: string): Promise<BillingDetailsGame[]> {
        try { 
            return this.billingDetailsGameRepo
            .createQueryBuilder('billing_details_dlc')
            .select([])
            .where('billing_detail_dlc.billingId = :Id', {Id: Id})
            .execute();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetBillingDetailGameByGameId(Id: string): Promise<BillingDetailsGame[]> {
        try {
            return this.billingDetailsGameRepo
            .createQueryBuilder('billing_details_dlc')
            .select([])
            .where('billing_detail_dlc.gameId = :Id', {Id: Id})
            .execute();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async UpdateBillingDetailsGame(billingInfoGame: BillingDetailsGame): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.billingDetailsGameRepo
            .update(
                {   
                    'billingId': billingInfoGame.billingId,
                    'gameId': billingInfoGame.gameId
                },
                {
                    'priceWithDiscount': billingInfoGame.priceWithDiscount,
                    'serialKey': billingInfoGame.serialKey
                }); 
            
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

    async RemoveBillingDetailsGame(BillingId: string, GameId: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.billingDetailsGameRepo
            .createQueryBuilder()
            .delete()
            .from(BillingDetailsGame)
            .where('billingId = :BillingId AND gameId = :GameId', {BillingId : BillingId, GameId : GameId})
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