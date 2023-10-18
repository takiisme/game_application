import { Repository } from 'typeorm';
import { Comment } from 'src/entities/comment.entity';
export declare class CommentService {
    private readonly commentRepo;
    constructor(commentRepo: Repository<Comment>);
    GetAllComments(): Promise<Comment[]>;
}
