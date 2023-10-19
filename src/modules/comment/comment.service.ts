import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from 'src/entities/comment.entity';

@Injectable() 
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRepo: Repository<Comment>,
    ) {}

    async AddComment(commentInfo: Comment): Promise<{success: boolean, message: string}> {
        try {
            const comment = this.commentRepo
            .create({
                'commentId': commentInfo.commentId,
                'content': commentInfo.content,
                'cmtDateTime': commentInfo.cmtDateTime,
                'userId': commentInfo.userId
            })
            await this.commentRepo.save(comment);

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

    async GetAllComments(): Promise<Comment[]> {
        try {
            return this.commentRepo.find();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetCommentById(Id: string): Promise<Comment[]> {
        try {
            return this.commentRepo
            .createQueryBuilder('comment')
            .select([])
            .where('comment.commentId =: Id', {Id: Id})
            .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async UpdateComment(commentInfo: Comment): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.commentRepo
            .update(commentInfo.commentId,
                {
                    'content': commentInfo.content,
                    'cmtDateTime': commentInfo.cmtDateTime,
                    'userId': commentInfo.userId
                }
            );

            if (result.affected === 0) {
                return {
                    success: false,
                    message: 'Record Id does not exist.'
                }
            }
            else {
                return {
                    success: true,
                    message: 'Record updated successfully.'
                }
            }
        }
        catch(error) {
            return {
                success: false,
                message: 'An error occured while updating the record.'
            }
        }
    }

    async RemoveComment(Id: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.commentRepo
            .createQueryBuilder()
            .delete()
            .from(Comment)
            .where('commentId = :Id', {Id: Id})
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