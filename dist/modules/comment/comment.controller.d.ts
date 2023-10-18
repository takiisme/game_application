import { Comment } from 'src/entities/comment.entity';
import { CommentService } from './comment.service';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    GetAllComments(): Promise<Comment[]>;
}
