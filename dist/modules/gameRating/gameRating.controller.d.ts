import { GameRating } from 'src/entities/gameRating.entity';
import { GameRatingService } from './gameRating.service';
export declare class GameRatingController {
    private readonly gameRatingService;
    constructor(gameRatingService: GameRatingService);
    GetAllGameRatings(): Promise<GameRating[]>;
}
