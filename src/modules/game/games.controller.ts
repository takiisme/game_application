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
import { Game } from 'src/entities/game.entity';
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
        @Res() response: Response
    ) {
        const {success, message} = await this.gameService.AddGame(gameInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
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
        @Res() response: Response
    ) {
        const {success, message} = await this.gameService.UpdateGame(gameInfo);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }

    @Delete('delete/:Id')
    async DeleteGameById(
        @Param('Id') Id: string,
        @Res() response: Response
    ) {
        const {success, message} = await this.gameService.RemoveGame(Id);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }
}