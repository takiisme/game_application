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
import { Response } from 'express'
import { Comment } from 'src/entities/comment.entity';
import { CommentModule } from './comment.module';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
    constructor(
        private readonly commentService : CommentService
    ) {}

    @Post('add')
    async AddComment(
        @Body() commentInfo : Comment,
        @Res() response: Response
    ) {
        const {success, message} = await this.commentService.AddComment(commentInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
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
        @Body() commentInfo: Comment,
        @Res() response: Response
    ) {
        const {success, message} = await this.commentService.UpdateComment(commentInfo);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }

    @Delete('delete/:Id')
    async RemoveComment(
        @Param('Id') Id: string,
        @Res() response: Response
    ) {
        const {success, message} = await this.commentService.RemoveComment(Id);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }
}