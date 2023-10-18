import { CommentDlc } from 'src/entities/commentDlc.entity';
import { CommentDlcService } from './commentDlc.service';
export declare class CommentDlcController {
    private readonly commentDlcService;
    constructor(commentDlcService: CommentDlcService);
    GetAllCommentDlc(): Promise<CommentDlc[]>;
}
