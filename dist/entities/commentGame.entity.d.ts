import { Comment } from './comment.entity';
import { Game } from './game.entity';
export declare class CommentGame {
    commentId: string;
    gameId: string;
    comment: Comment;
    game: Game;
}
