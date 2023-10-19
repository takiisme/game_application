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
import { GameGenre } from 'src/entities/gameGenres.entity';
import { GameGenreService } from './gameGenres.service';

@Controller('game_genres')
export class GameGenreController {
    constructor(
        private readonly gameGenreService : GameGenreService
    ) {}

    @Post('add')
    async AddGameGenre(
        @Body() gameGenreInfo: GameGenre,
        @Res() response: Response
    ) {
        const {success, message} = await this.gameGenreService.AddGameGenre(gameGenreInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
    }

    @Get('getall')
    async GetAllGameGenres() {
        return this.gameGenreService.GetAllGameGenres();
    }

    @Get('get/:Id')
    async GetGameGenreByGameId(@Param('Id') Id: string) {
        return this.gameGenreService.GetGameGenreByGameId(Id);
    }

    @Get('get/:Id')
    async GetGameGenreByGenreId(@Param('Id') Id: string) {
        return this.gameGenreService.GetGameGenreByGenreId(Id);
    }

    @Delete('delete')
    async DeleteGameGenre(
        @Body() gameGenreInfo: GameGenre,
        @Res() response: Response
    ) {
        const {success, message} = await this.gameGenreService.RemoveGameGenre(gameGenreInfo.gameId, gameGenreInfo.genreId.toString());

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }
}