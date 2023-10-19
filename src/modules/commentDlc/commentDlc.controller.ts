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
import { CommentDlc } from 'src/entities/commentDlc.entity';
import { CommentDlcService} from './commentDlc.service';

@Controller('comment_dlc')
export class CommentDlcController
{
    constructor(
        private readonly commentDlcService : CommentDlcService
    ) {}

    @Post('add')
    async AddComemntDlc(
        @Body() commentDlcInfo: CommentDlc,
        @Res() response: Response
    ) {
        const {success, message} = await this.commentDlcService.AddCommentDlc(commentDlcInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
    }

    @Get('getall')
    async GetAllCommentDlc() {
        return this.commentDlcService.GetAllCommentDlc();
    }

    @Get('get/:Id')
    async GetCommentDlcByDlcId(@Param('Id') Id: string) {
        return this.commentDlcService.GetCommentDlcByDlcId(Id);
    }

    @Delete('delete')
    async DeleteCommentDlc(
        @Body() commentDlcInfo: CommentDlc,
        @Res() response: Response
    ) {
        const {success, message} = await this.commentDlcService.RemoveCommentDlc(commentDlcInfo.commentId, commentDlcInfo.dlcId);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }
}