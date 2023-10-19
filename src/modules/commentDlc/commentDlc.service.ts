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

    async AddCommentDlc(commentDlcInfo: CommentDlc): Promise<{success: boolean, message: string}> {
        try {
            const commentDlc = this.commentDlcRepo
            .create({
                'commentId': commentDlcInfo.commentId,
                'dlcId': commentDlcInfo.dlcId
            });
            await this.commentDlcRepo.save(commentDlc);

            return {
                success: true,
                message: 'Record added successfully.'
            }
        }
        catch(error) {
            if(error.code === '23505') {
                return {
                    success: false,
                    message: "Record ID is taken already."
                }
            }

            return {
                success: false,
                message: "An error occured while adding the record."
            }
        }
    }

    async GetAllCommentDlc(): Promise<CommentDlc[]> {
        try {
            return this.commentDlcRepo.find();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetCommentDlcByDlcId(Id: string): Promise<CommentDlc[]> {
        try {
            return this.commentDlcRepo
            .createQueryBuilder('comment_dlc')
            .select([])
            .where('comment_dlc.commentId = :Id', {Id: Id})
            .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async RemoveCommentDlc(CommentId: string, DlcId: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.commentDlcRepo
            .createQueryBuilder()
            .delete()
            .from(CommentDlc)
            .where('commentId = :CommentId AND dlcId = :DlcId', {CommentId : CommentId, DlcId : DlcId})
            .execute();
        
            if(result.affected === 0) {
                return {
                    success: false,
                    message: 'Record Id does not exist.'
                }
            }
            else {
                return {
                    success: true,
                    message: 'Record deleted successfully.'
                }
            }
        }
        catch(error) {
            return {
                success: false,
                message: 'An error occured while deleting the record.'
            }
        }
    }
} 