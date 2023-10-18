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
import { Comment } from 'src/entities/comment.entity';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
    constructor(
        private readonly commentService : CommentService
    ) {}

    @Post('add')
    async AddComment(
        @Body() commentInfo : Comment
    ) {
        return this.commentService.AddComment(commentInfo);
    }

    @Get('getall')
    async GetAllComments() {
        return this.commentService.GetAllComments();
    }

    @Get('get/:Id')
    async GetCommentById(@Param('Id') Id: string) {
        return this.commentService.GetCommentById(Id);
    }

    @Put('update')
    async UpdateComment(
        @Body() commentInfo: Comment
    ) {
        return this.commentService.UpdateComment(commentInfo);
    }

    @Delete('delete/:Id')
    async RemoveComment(@Param('Id') Id: string) {
        return this.commentService.RemoveComment(Id);
    }
}