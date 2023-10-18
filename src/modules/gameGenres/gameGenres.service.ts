import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameGenre } from 'src/entities/gameGenres.entity';

@Injectable() 
export class GameGenreService {
    constructor(
        @InjectRepository(GameGenre)
        private readonly gameGenreRepo : Repository<GameGenre>,
    ) {}

    async AddGameGenre(gameGenreInfo: GameGenre) {
        const gameGenre = this.gameGenreRepo.create({
            'gameId': gameGenreInfo.gameId,
            'genreId': gameGenreInfo.genreId
        })
        await this.gameGenreRepo.save(gameGenre);
    }

    async GetAllGameGenres() {
        return this.gameGenreRepo.find();
    }

    async GetGameGenreByGameId(GameId: string) {
        return this.gameGenreRepo.createQueryBuilder('game_genre')
            .select([]).where('game_genre.gameId = :GameId', {GameId: GameId}).execute();
    }

    async GetGameGenreByGenreId(GenreId: string) {
        return this.gameGenreRepo.createQueryBuilder('game_genre')
            .select([]).where('game_genre.genreId = :GenreId', {GenreId : GenreId}).execute();
    }

    async RemoveGameGenre(GameId: string, GenreId: string) {
        await this.gameGenreRepo.createQueryBuilder()
            .delete().from(GameGenre).where('gameId = :GameId AND genreId = :GenreId', {GameId: GameId, GenreId: GenreId}).execute();
    }
}