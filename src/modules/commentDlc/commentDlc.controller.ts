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
        @Body() commentDlcInfo: CommentDlc
    ) {
        return this.commentDlcService.AddCommentDlc(commentDlcInfo);
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
        @Body() commentDlcInfo: CommentDlc
    ) {
        return this.commentDlcService.RemoveCommentDlc(commentDlcInfo.commentId, commentDlcInfo.dlcId);
    }
}