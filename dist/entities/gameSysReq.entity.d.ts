import { Game } from './game.entity';
export declare class GameSysReq {
    gameId: string;
    reqType: string;
    ram: number;
    os: string;
    gpu: string;
    cpu: string;
    minStorage: number;
    game: Game;
}
