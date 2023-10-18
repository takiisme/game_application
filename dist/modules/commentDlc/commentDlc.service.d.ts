import { Repository } from 'typeorm';
import { CommentDlc } from 'src/entities/commentDlc.entity';
export declare class CommentDlcService {
    private readonly commentDlcRepo;
    constructor(commentDlcRepo: Repository<CommentDlc>);
    GetAllCommentDlc(): Promise<CommentDlc[]>;
}
