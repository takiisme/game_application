import { Repository } from 'typeorm';
import { GameSysReq } from 'src/entities/gameSysReq.entity';
export declare class GameSysReqService {
    private readonly gameSysReqRepo;
    constructor(gameSysReqRepo: Repository<GameSysReq>);
    GetAllGameSysReq(): Promise<GameSysReq[]>;
}
