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

    async AddComment(commentInfo: Comment) {
        const comment = this.commentRepo.create({
            'commentId': commentInfo.commentId,
            'content': commentInfo.content,
            'cmtDateTime': commentInfo.cmtDateTime,
            'userId': commentInfo.userId
        })
        await this.commentRepo.save(comment);
    }

    async GetAllComments() {
        return this.commentRepo.find();
    }

    async GetCommentById(Id: string) {
        return this.commentRepo.createQueryBuilder('comment')
            .select([]).where('comment.commentId =: Id', {Id: Id}).getRawMany();
    }

    async UpdateComment(commentInfo: Comment) {
        await this.commentRepo.update(commentInfo.commentId,
            {
                'content': commentInfo.content,
                'cmtDateTime': commentInfo.cmtDateTime,
                'userId': commentInfo.userId
            }
        );
    }

    async RemoveComment(Id: string) {
        await this.commentRepo.createQueryBuilder()
            .delete().from(Comment).where('commentId = :Id', {Id: Id}).execute();
    }
}