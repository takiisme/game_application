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
import { Response } from 'express';
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
        @Body() gameSysReqInfo: GameSysReq,
        @Res() response: Response
    ) {
        const {success, message} = await this.gameSysReqService.AddGameSysReq(gameSysReqInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
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
        @Body() gameSysReqInfo: GameSysReq,
        @Res() response: Response
    ) {
        const {success, message} = await this.gameSysReqService.UpdateGameSysReq(gameSysReqInfo);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }

    @Delete('delete')
    async DeleteGameSysReq(
        @Body() gameSysReqInfo: GameSysReq,
        @Res() response: Response
    ) {
        const {success, message} = await this.gameSysReqService.RemoveGameSysReq(gameSysReqInfo.gameId, gameSysReqInfo.reqType);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }
}