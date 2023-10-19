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

    async AddSaleDetailsGame(saleDetailsGameInfo: SaleDetailsGame): Promise<{success: boolean, message: string}> {
        try {
            const saleDetailsGame = this.saleDetailsGameRepo
            .create({
                'periodId': saleDetailsGameInfo.periodId,
                'gameId': saleDetailsGameInfo.gameId,
                'discountRate': saleDetailsGameInfo.discountRate
            })
            await this.saleDetailsGameRepo.save(saleDetailsGame);

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

    async GetAllSaleDetailsGame(): Promise<SaleDetailsGame[]> {
        try {
            return this.saleDetailsGameRepo.find();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetSaleDetailsGameByGameId(Id: string): Promise<SaleDetailsGame[]> {
        try {
            return this.saleDetailsGameRepo
            .createQueryBuilder('sale_details_game')
            .select([])
            .where('sale_details_game.gameId = :Id', {Id: Id})
            .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetSaleDetailsGameByPeriodId(Id: string): Promise<SaleDetailsGame[]> {
        try {
            return this.saleDetailsGameRepo
            .createQueryBuilder('sale_details_game')
            .select([])
            .where('sale_details_game.periodId = :Id', {Id: Id})
            .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetSaleDetailsGameBySaleId(Id: string): Promise<SaleDetailsGame[]> {
        try {
            return this.saleDetailsGameRepo
            .createQueryBuilder('sale_details_game')
            .select([])
            .where('sale_details_game.saleId = :Id', {Id: Id})
            .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async UpdateSaleDetailsGame(saleDetailsGameInfo: SaleDetailsGame): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.saleDetailsGameRepo
            .update(
                {
                    'periodId': saleDetailsGameInfo.periodId,
                    'gameId': saleDetailsGameInfo.gameId,
                },
                {
                    'discountRate': saleDetailsGameInfo.discountRate
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

    async RemoveSaleDetailsGame(PeriodId: string, GameId: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.saleDetailsGameRepo
            .createQueryBuilder()
            .delete()
            .from(SaleDetailsGame)
            .where('periodId = :PeriodId AND gameId = :GameId', {PeriodId: PeriodId, GameId: GameId})
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