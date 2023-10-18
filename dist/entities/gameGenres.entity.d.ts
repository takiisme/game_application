import { Game } from './game.entity';
import { Genre } from './genre.entity';
export declare class GameGenre {
    gameId: string;
    genreId: number;
    game: Game;
    genre: Genre;
}
