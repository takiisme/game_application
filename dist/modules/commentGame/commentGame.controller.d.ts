import { CommentGame } from 'src/entities/commentGame.entity';
import { CommentGameService } from './commentGame.service';
export declare class CommentGameController {
    private readonly commentGameService;
    constructor(commentGameService: CommentGameService);
    GetAllCommentGame(): Promise<CommentGame[]>;
}
