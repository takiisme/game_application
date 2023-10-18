import { Comment } from './comment.entity';
import { Dlc } from './dlc.entity';
export declare class CommentDlc {
    commentId: string;
    dlcId: string;
    comment: Comment;
    dlc: Dlc;
}
