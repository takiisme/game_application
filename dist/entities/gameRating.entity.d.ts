import { Game } from './game.entity';
import { UserAccount } from './userAccount.entity';
export declare class GameRating {
    userId: string;
    gameId: string;
    ratingDate: Date;
    ratingStar: number;
    game: Game;
    userAccount: UserAccount;
}
