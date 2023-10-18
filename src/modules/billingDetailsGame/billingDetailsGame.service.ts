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

    async AddBillingDetailsGame(billingInfoGame: BillingDetailsGame) {
        const billingDlc = this.billingDetailsGameRepo.create({
            'billingId': billingInfoGame.billingId,
            'gameId': billingInfoGame.gameId,
            'priceWithDiscount': billingInfoGame.priceWithDiscount,
            'serialKey': billingInfoGame.serialKey
        })
        await this.billingDetailsGameRepo.save(billingDlc);
    }

    async GetAllBillingDetailsGame() {
        return this.billingDetailsGameRepo.find();
    }

    async GetBillingDetailGameByBillingId(Id: string) {
        return this.billingDetailsGameRepo.createQueryBuilder('billing_details_dlc')
            .select([]).where('billing_detail_dlc.billingId = :Id', {Id: Id}).execute();
    }

    async GetBillingDetailGameByGameId(Id: string) {
        return this.billingDetailsGameRepo.createQueryBuilder('billing_details_dlc')
            .select([]).where('billing_detail_dlc.gameId = :Id', {Id: Id}).execute();
    }

    async UpdateBillingDetailsGame(billingInfoGame: BillingDetailsGame) {
        await this.billingDetailsGameRepo.update(
            {   
                'billingId': billingInfoGame.billingId,
                'gameId': billingInfoGame.gameId
            },
            {
                'priceWithDiscount': billingInfoGame.priceWithDiscount,
                'serialKey': billingInfoGame.serialKey
            }); 
    }

    async RemoveBillingDetailsGame(BillingId: string, GameId: string) {
        await this.billingDetailsGameRepo.createQueryBuilder()
            .delete().from(BillingDetailsGame).where('billingId = :BillingId AND gameId = :GameId', {BillingId : BillingId, GameId : GameId}).execute();
    }
}