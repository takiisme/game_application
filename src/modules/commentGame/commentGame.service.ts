import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentGame } from 'src/entities/commentGame.entity';

@Injectable()
export class CommentGameService {
    constructor(
        @InjectRepository(CommentGame)
        private readonly commentGameRepo: Repository<CommentGame>,
    ) { }

    async AddCommentGame(commentGameInfo: CommentGame) {
        const commentGame = this.commentGameRepo.create({
            'commentId': commentGameInfo.commentId,
            'gameId': commentGameInfo.gameId
        });
        await this.commentGameRepo.save(commentGame);
    }

    async GetAllCommentGame() {
        return this.commentGameRepo.find();
    }

    async GetCommentGameById(GameId: string) {
        return this.commentGameRepo.createQueryBuilder('comment_game')
            .select([]).where('comment_game.gameId = :Id', { Id: GameId }).getRawMany();
    }

    async RemoveCommentGame(CommentId: string, GameId: string) {
        await this.commentGameRepo.createQueryBuilder()
            .delete().from(CommentGame).where('commentId = : CommentId AND gameId = :GameId', { CommentId : CommentId, GameId : GameId }).execute();
    }
} 