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

    async AddGameGenre(gameGenreInfo: GameGenre): Promise<{success: boolean, message: string}> {
        try {
            const gameGenre = this.gameGenreRepo
            .create({
                'gameId': gameGenreInfo.gameId,
                'genreId': gameGenreInfo.genreId
            })
            await this.gameGenreRepo.save(gameGenre);

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

    async GetAllGameGenres(): Promise<GameGenre[]> {
        try {
            return this.gameGenreRepo.find();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetGameGenreByGameId(GameId: string): Promise<GameGenre[]> {
        try {
            return this.gameGenreRepo
            .createQueryBuilder('game_genre')
            .select([])
            .where('game_genre.gameId = :GameId', {GameId: GameId})
            .execute();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetGameGenreByGenreId(GenreId: string): Promise<GameGenre[]> {
        try {
            return this.gameGenreRepo
            .createQueryBuilder('game_genre')
            .select([])
            .where('game_genre.genreId = :GenreId', {GenreId : GenreId})
            .execute();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async RemoveGameGenre(GameId: string, GenreId: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.gameGenreRepo
            .createQueryBuilder()
                .delete()
                .from(GameGenre)
                .where('gameId = :GameId AND genreId = :GenreId', {GameId: GameId, GenreId: GenreId})
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