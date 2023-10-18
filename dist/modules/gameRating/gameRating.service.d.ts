import { Repository } from 'typeorm';
import { GameRating } from 'src/entities/gameRating.entity';
export declare class GameRatingService {
    private readonly gameRatingRepo;
    constructor(gameRatingRepo: Repository<GameRating>);
    GetAllGameRating(): Promise<GameRating[]>;
}
