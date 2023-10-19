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
import { CommentGame } from 'src/entities/commentGame.entity';
import { CommentGameService } from './commentGame.service';

@Controller('comment_game')
export class CommentGameController
{
    constructor(
        private readonly commentGameService : CommentGameService
    ) {}

    @Post('add')
    async AddComemntGame(
        @Body() commentGameInfo: CommentGame,
        @Res() response: Response
    ) {
        const {success, message} = await this.commentGameService.AddCommentGame(commentGameInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
    }

    @Get('getall')
    async GetAllCommentGame() {
        return this.commentGameService.GetAllCommentGame();
    }

    @Get('get/:Id')
    async GetCommentGameByGameId(@Param('Id') Id: string) {
        return this.commentGameService.GetCommentGameById(Id);
    }

    @Delete('delete')
    async DeleteCommentGame(
        @Body() commentGameInfo: CommentGame,
        @Res() response: Response
    ) {
        const {success, message} = await this.commentGameService.RemoveCommentGame(commentGameInfo.commentId, commentGameInfo.gameId);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }
}