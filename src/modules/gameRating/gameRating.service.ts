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

    async AddGameRating(gameRatingInfo: GameRating) {
        const gameRating = this.gameRatingRepo.create({
            'userId': gameRatingInfo.userId,
            'gameId': gameRatingInfo.gameId,
            'ratingDate': gameRatingInfo.ratingDate,
            'ratingStar': gameRatingInfo.ratingStar
        })
        await this.gameRatingRepo.save(gameRating);
    }

    async GetGameRatingByUserId(UserId: string) {
        return this.gameRatingRepo.createQueryBuilder('game_rating')
            .select([]).where('game_rating.userId =: UserId', {UserId: UserId}).getRawMany();
    }

    async GetGameRatingByGameId(GameId: string) {
        return this.gameRatingRepo.createQueryBuilder('game_rating')
            .select([]).where('game_rating.gameId = :GameId', {GameId: GameId}).getRawMany();
    }

    async GetAllGameRating() {
        return this.gameRatingRepo.find();
    }

    async UpdateGameRating(gameRatingInfo: GameRating) {
        await this.gameRatingRepo.update(
            {
                'userId': gameRatingInfo.userId,
                'gameId': gameRatingInfo.gameId
            },
            {
                'ratingDate': gameRatingInfo.ratingDate,
                'ratingStar': gameRatingInfo.ratingStar
            }
        );
    }

    async RemoveGameRating(UserId: string, GameId: string) {
        await this.gameRatingRepo.createQueryBuilder()
            .delete().from(GameRating).where('userId = :UserId AND gameId = :GameId', {UserId: UserId, GameId: GameId}).execute();
    }
}