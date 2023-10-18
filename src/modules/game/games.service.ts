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

    async AddGame(gameInfo: Game) {
        const game = this.gameRepo.create({
            'gameId': gameInfo.gameId,
            'gameName': gameInfo.gameName,
            'description': gameInfo.description,
            'releaseDate': gameInfo.releaseDate,
            'price': gameInfo.price,
            'devId': gameInfo.devId
        })
        await this.gameRepo.save(game);
    }

    async GetAllGames() {
        return this.gameRepo.find();
    }

    async GetGameById(Id: string) {
        return this.gameRepo.createQueryBuilder('game')
            .select([]).where('game.gameId=:Id', { Id: Id }).getRawMany();
    }

    async UpdateGame(gameInfo: Game) {
        await this.gameRepo.update(gameInfo.gameId,
            {
                'gameName': gameInfo.gameName,
                'description': gameInfo.description,
                'releaseDate': gameInfo.releaseDate,
                'price': gameInfo.price,
                'devId': gameInfo.devId
            }
        );
    }

    async RemoveGame(Id: string) {
        await this.gameRepo.createQueryBuilder()
            .delete().from(Game).where('gameId = :Id', { Id: Id }).execute();
    }
}