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

    async AddCommentGame(commentGameInfo: CommentGame): Promise<{success: boolean, message: string}> {
        try {
            const commentGame = this.commentGameRepo
            .create({
                'commentId': commentGameInfo.commentId,
                'gameId': commentGameInfo.gameId
            });
            await this.commentGameRepo.save(commentGame);

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

    async GetAllCommentGame(): Promise<CommentGame[]> {
        try {
            return this.commentGameRepo.find();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetCommentGameById(GameId: string): Promise<CommentGame[]> {
        try {
            return this.commentGameRepo
            .createQueryBuilder('comment_game')
            .select([])
            .where('comment_game.gameId = :Id', { Id: GameId })
            .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async RemoveCommentGame(CommentId: string, GameId: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.commentGameRepo
                .createQueryBuilder()
                .delete()
                .from(CommentGame)
                .where('commentId = : CommentId AND gameId = :GameId', { CommentId : CommentId, GameId : GameId })
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