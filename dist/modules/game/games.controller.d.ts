import { Game } from 'src/entities/game.entity';
import { GameService } from './games.service';
export declare class GameController {
    private readonly gameService;
    constructor(gameService: GameService);
    AddGame(gameInfo: Game): Promise<void>;
    GetAllGames(): Promise<Game[]>;
    GetGameById(Id: string): Promise<any[]>;
    UpdateGame(gameInfo: Game): Promise<void>;
    DeleteGameById(Id: string): Promise<void>;
}
