import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaleDetailsGame } from 'src/entities/saleDetailsGame.entity';

@Injectable()
export class SaleDetailsGameService {
    constructor(
        @InjectRepository(SaleDetailsGame)
        private readonly saleDetailsGameRepo : Repository<SaleDetailsGame>,
    ) {}

    async AddSaleDetailsGame(saleDetailsGameInfo: SaleDetailsGame) {
        const saleDetailsGame = this.saleDetailsGameRepo.create({
            'periodId': saleDetailsGameInfo.periodId,
            'gameId': saleDetailsGameInfo.gameId,
            'discountRate': saleDetailsGameInfo.discountRate
        })
        await this.saleDetailsGameRepo.save(saleDetailsGame);
    }

    async GetAllSaleDetailsGame() {
        return this.saleDetailsGameRepo.find();
    }

    async GetSaleDetailsGameByGameId(Id: string) {
        return this.saleDetailsGameRepo.createQueryBuilder('sale_details_game')
            .select([]).where('sale_details_game.gameId = :Id', {Id: Id}).getRawMany();
    }

    async GetSaleDetailsGameByPeriodId(Id: string) {
        return this.saleDetailsGameRepo.createQueryBuilder('sale_details_game')
            .select([]).where('sale_details_game.periodId = :Id', {Id: Id}).getRawMany();
    }

    async GetSaleDetailsGameBySaleId(Id: string) {
        return this.saleDetailsGameRepo.createQueryBuilder('sale_details_game')
            .select([]).where('sale_details_game.saleId = :Id', {Id: Id}).getRawMany();
    }

    async UpdateSaleDetailsGame(saleDetailsGameInfo: SaleDetailsGame) {
        await this.saleDetailsGameRepo.update(
            {
                'periodId': saleDetailsGameInfo.periodId,
                'gameId': saleDetailsGameInfo.gameId,
            },
            {
                'discountRate': saleDetailsGameInfo.discountRate
            }
        );
    }

    async RemoveSaleDetailsGame(PeriodId: string, GameId: string) {
        await this.saleDetailsGameRepo.createQueryBuilder()
            .delete().from(SaleDetailsGame).where('periodId = :PeriodId AND gameId = :GameId', {PeriodId: PeriodId, GameId: GameId}).execute(); 
    }
}