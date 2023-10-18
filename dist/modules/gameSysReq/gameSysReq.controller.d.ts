import { GameSysReq } from 'src/entities/gameSysReq.entity';
import { GameSysReqService } from './gameSysReq.service';
export declare class GameSysReqController {
    private readonly gameSysReqService;
    constructor(gameSysReqService: GameSysReqService);
    GetAllGameSysReq(): Promise<GameSysReq[]>;
}
