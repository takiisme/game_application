import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameRating } from 'src/entities/gameRating.entity';

@Injectable()
export class GameRatingService {
    constructor(
        @InjectRepository(GameRating)
        private readonly gameRatingRepo : Repository<GameRating>,
    ) {}

    async AddGameRating(gameRatingInfo: GameRating): Promise<{success: boolean, message: string}> {
        try {
            const gameRating = this.gameRatingRepo
            .create({
                'userId': gameRatingInfo.userId,
                'gameId': gameRatingInfo.gameId,
                'ratingDate': gameRatingInfo.ratingDate,
                'ratingStar': gameRatingInfo.ratingStar
            })
            await this.gameRatingRepo.save(gameRating);

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

    async GetGameRatingByUserId(UserId: string): Promise<GameRating[]> {
        try {
            return this.gameRatingRepo
            .createQueryBuilder('game_rating')
            .select([])
            .where('game_rating.userId =: UserId', {UserId: UserId})
            .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetGameRatingByGameId(GameId: string): Promise<GameRating[]> {
        try {
            return this.gameRatingRepo
            .createQueryBuilder('game_rating')
            .select([])
            .where('game_rating.gameId = :GameId', {GameId: GameId})
            .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetAllGameRating(): Promise<GameRating[]> {
        try {
            return this.gameRatingRepo.find();    
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async UpdateGameRating(gameRatingInfo: GameRating): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.gameRatingRepo
            .update(
                {
                    'userId': gameRatingInfo.userId,
                    'gameId': gameRatingInfo.gameId
                },
                {
                    'ratingDate': gameRatingInfo.ratingDate,
                    'ratingStar': gameRatingInfo.ratingStar
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

    async RemoveGameRating(UserId: string, GameId: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.gameRatingRepo
            .createQueryBuilder()
            .delete()
            .from(GameRating)
            .where('userId = :UserId AND gameId = :GameId', {UserId: UserId, GameId: GameId})
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