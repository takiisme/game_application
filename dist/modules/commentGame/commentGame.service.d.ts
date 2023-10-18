import { Repository } from 'typeorm';
import { CommentGame } from 'src/entities/commentGame.entity';
export declare class CommentGameService {
    private readonly commentGameRepo;
    constructor(commentGameRepo: Repository<CommentGame>);
    GetAllCommentGame(): Promise<CommentGame[]>;
}
