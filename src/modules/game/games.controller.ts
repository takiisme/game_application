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
import { ParamsTokenFactory } from '@nestjs/core/pipes';
import { response } from 'express';
import { Game } from 'src/entities/game.entity';
import { DeleteDateColumn } from 'typeorm';
import { GameService } from './games.service';

@Controller('game') 
export class GameController
{
    constructor(
        private readonly gameService : GameService
    ) {}

    @Post('add')
    async AddGame(
        @Body() gameInfo: Game,
    ) {
        return this.gameService.AddGame(gameInfo);
    }

    @Get('getall')
    async GetAllGames() {
        return this.gameService.GetAllGames();
    }

    @Get('get/:Id')
    async GetGameById(@Param('Id') Id: string) {
        return this.gameService.GetGameById(Id);
    }

    @Put('update')
    async UpdateGame(
        @Body() gameInfo: Game,
    ) {
        return this.gameService.UpdateGame(gameInfo);
    }

    @Delete('delete/:Id')
    async DeleteGameById(@Param('Id') Id: string) {
        return this.gameService.RemoveGame(Id);
    }
}