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
import { stringify } from 'querystring';
import { GameGenre } from 'src/entities/gameGenres.entity';
import { GameGenreService } from './gameGenres.service';

@Controller('game_genres')
export class GameGenreController {
    constructor(
        private readonly gameGenreService : GameGenreService
    ) {}

    @Post('add')
    async AddGameGenre(
        @Body() gameGenreInfo: GameGenre
    ) {
        return this.gameGenreService.AddGameGenre(gameGenreInfo);
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
        @Body() gameGenreInfo: GameGenre
    ) {
        return this.gameGenreService.RemoveGameGenre(gameGenreInfo.gameId, gameGenreInfo.genreId.toString());
    }
}