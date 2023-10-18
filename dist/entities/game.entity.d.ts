import { Developer } from './developer.entity';
export declare class Game {
    gameId: string;
    gameName: string;
    description: string;
    releaseDate: Date;
    price: number;
    devId: string;
    developer: Developer;
}
