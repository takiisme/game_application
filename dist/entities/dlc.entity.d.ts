import { Developer } from './developer.entity';
import { Game } from './game.entity';
export declare class Dlc {
    dlcId: string;
    dlcName: string;
    description: string;
    releaseDate: Date;
    price: number;
    devId: string;
    gameId: string;
    developer: Developer;
    game: Game;
}
