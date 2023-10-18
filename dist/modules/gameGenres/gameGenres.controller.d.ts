import { GameGenre } from 'src/entities/gameGenres.entity';
import { GameGenreService } from './gameGenres.service';
export declare class GameGenreController {
    private readonly gameGenreService;
    constructor(gameGenreService: GameGenreService);
    GetAllGameGenres(): Promise<GameGenre[]>;
}
