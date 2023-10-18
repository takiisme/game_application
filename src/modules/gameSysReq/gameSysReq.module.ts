import { Module } from "@nestjs/common";
import { GameSysReqController } from "./gameSysReq.controller";
import { GameSysReqService } from "./gameSysReq.service";

@Module ({
    controllers: [GameSysReqController],
    providers: [GameSysReqService],
})

export class GameSysReqModule {}