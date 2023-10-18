import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentDlc } from 'src/entities/commentDlc.entity';

@Injectable()
export class CommentDlcService {
    constructor(
        @InjectRepository(CommentDlc)
        private readonly commentDlcRepo: Repository<CommentDlc>,
    ) {}

    async AddCommentDlc(commentDlcInfo: CommentDlc) {
        const commentDlc = this.commentDlcRepo.create({
            'commentId': commentDlcInfo.commentId,
            'dlcId': commentDlcInfo.dlcId
        });
        await this.commentDlcRepo.save(commentDlc);
    }

    async GetAllCommentDlc() {
        return this.commentDlcRepo.find();
    }

    async GetCommentDlcByDlcId(Id: string) {
        return this.commentDlcRepo.createQueryBuilder('comment_dlc')
            .select([]).where('comment_dlc.commentId = :Id', {Id: Id}).getRawMany();
    }

    async RemoveCommentDlc(CommentId: string, DlcId: string) {
        await this.commentDlcRepo.createQueryBuilder()
            .delete().from(CommentDlc).where('commentId = :CommentId AND dlcId = :DlcId', {CommentId : CommentId, DlcId : DlcId}).execute();
    }
} 