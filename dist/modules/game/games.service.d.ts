import { Repository } from 'typeorm';
import { Game } from '../../entities/game.entity';
export declare class GameService {
    private readonly gameRepo;
    constructor(gameRepo: Repository<Game>);
    AddGame(gameInfo: Game): Promise<void>;
    GetAllGames(): Promise<Game[]>;
    GetGameById(Id: string): Promise<any[]>;
    UpdateGame(gameInfo: Game): Promise<void>;
    RemoveGame(Id: string): Promise<void>;
}
