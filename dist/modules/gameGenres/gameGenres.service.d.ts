import { Repository } from 'typeorm';
import { GameGenre } from 'src/entities/gameGenres.entity';
export declare class GameGenreService {
    private readonly gameGenreRepo;
    constructor(gameGenreRepo: Repository<GameGenre>);
    GetAllGameGenres(): Promise<GameGenre[]>;
}
