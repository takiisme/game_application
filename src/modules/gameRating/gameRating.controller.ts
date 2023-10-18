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
import { GameRating } from 'src/entities/gameRating.entity';
import { GameRatingService } from './gameRating.service';

@Controller('game_rating')
export class GameRatingController {
    constructor(
        private readonly gameRatingService: GameRatingService
    ) {}

    @Post('add')
    async AddGameRating(
        @Body() gameRatingInfo: GameRating
    ) {
        return this.gameRatingService.AddGameRating(gameRatingInfo);
    }

    @Get('getall')
    async GetAllGameRatings() {
        return this.gameRatingService.GetAllGameRating();
    }
    
    @Get('get/:Id')
    async GetGameRatingByGameId(@Param('Id') Id: string) {
        return this.gameRatingService.GetGameRatingByGameId(Id);
    }

    @Get('get/:Id')
    async GetGameRatingByUserId(@Param('Id') Id: string) {
        return this.gameRatingService.GetGameRatingByUserId(Id);
    }

    @Put('update/:Id')
    async UpdateGameRating(
        @Body() gameRatingInfo: GameRating
    ) {
        return this.gameRatingService.UpdateGameRating(gameRatingInfo);
    }

    @Delete('delete')
    async DeleteGameRating(
        @Body() gameRatingInfo: GameRating
    ) {
        return this.gameRatingService.RemoveGameRating(gameRatingInfo.userId, gameRatingInfo.gameId);
    }
}