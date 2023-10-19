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
import { GameRating } from 'src/entities/gameRating.entity';
import { GameRatingService } from './gameRating.service';

@Controller('game_rating')
export class GameRatingController {
    constructor(
        private readonly gameRatingService: GameRatingService
    ) {}

    @Post('add')
    async AddGameRating(
        @Body() gameRatingInfo: GameRating,
        @Res() response: Response
    ) {
        const {success, message} = await this.gameRatingService.AddGameRating(gameRatingInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
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
        @Body() gameRatingInfo: GameRating,
        @Res() response: Response
    ) {
        const {success, message} = await this.gameRatingService.UpdateGameRating(gameRatingInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
    }

    @Delete('delete')
    async DeleteGameRating(
        @Body() gameRatingInfo: GameRating,
        @Res() response: Response
    ) {
        const {success, message} = await this.gameRatingService.RemoveGameRating(gameRatingInfo.userId, gameRatingInfo.gameId);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
    }
}