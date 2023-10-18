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
        @Body() commentGameInfo: CommentGame
    ) {
        return this.commentGameService.AddCommentGame(commentGameInfo);
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
        @Body() commentGameInfo: CommentGame
    ) {
        return this.commentGameService.RemoveCommentGame(commentGameInfo.commentId, commentGameInfo.gameId);
    }
}