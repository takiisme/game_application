import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Delete,
    Put,
    Res,
    ValidationPipe,
} from '@nestjs/common';
import { GameSysReq } from 'src/entities/gameSysReq.entity';
import { GameSysReqService } from './gameSysReq.service';

@Controller('game_sys_req')
export class GameSysReqController
{
    constructor (
        private readonly gameSysReqService : GameSysReqService
    ) {}

    @Post('add')
    async AddGameSysReq(
        @Body() gameSysReqInfo: GameSysReq
    ) {
        return this.gameSysReqService.AddGameSysReq(gameSysReqInfo);
    }

    @Get('getall')
    async GetAllGameSysReq() {
        return this.gameSysReqService.GetAllGameSysReq();
    }

    @Get('get/:Id')
    async GetGameSysReqByGameId(@Param('Id') Id: string) {
        return this.gameSysReqService.GetGameSysReqByGameId(Id);
    }

    @Put('update')
    async UpdateGameSysReq(
        @Body() gameSysReqInfo: GameSysReq
    ) {
        return this.gameSysReqService.UpdateGameSysReq(gameSysReqInfo);
    }

    @Delete('delete')
    async DeleteGameSysReq(
        @Body() gameSysReqInfo: GameSysReq
    ) {
        return this.gameSysReqService.RemoveGameSysReq(gameSysReqInfo.gameId, gameSysReqInfo.reqType);
    }
}