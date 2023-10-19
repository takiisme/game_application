import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from '../../entities/game.entity'

@Injectable()
export class GameService {
    constructor(
        @InjectRepository(Game)
        private readonly gameRepo: Repository<Game>,
    ) {}

    async AddGame(gameInfo: Game): Promise<{success: boolean, message: string}> {
        try {
            const game = this.gameRepo
            .create({
                'gameId': gameInfo.gameId,
                'gameName': gameInfo.gameName,
                'description': gameInfo.description,
                'releaseDate': gameInfo.releaseDate,
                'price': gameInfo.price,
                'devId': gameInfo.devId
            })
            await this.gameRepo.save(game);

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

    async GetAllGames() : Promise<Game[]> {
        try {
            const result = await this.gameRepo.find();
            return result;
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetGameById(Id: string): Promise<Game[]> {
        try {
            const result = this.gameRepo
            .createQueryBuilder('game')
                .select([])
                .where('game.gameId=:Id', { Id: Id })
                .getRawMany();
            return result;
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async UpdateGame(gameInfo: Game): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.gameRepo
            .update(gameInfo.gameId,
                {
                    'gameName': gameInfo.gameName,
                    'description': gameInfo.description,
                    'releaseDate': gameInfo.releaseDate,
                    'price': gameInfo.price,
                    'devId': gameInfo.devId
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

    async RemoveGame(Id: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.gameRepo
            .createQueryBuilder()
                .delete()
                .from(Game).where('gameId = :Id', { Id: Id })
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