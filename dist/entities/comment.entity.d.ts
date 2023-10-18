import { UserAccount } from './userAccount.entity';
export declare class Comment {
    commentId: number;
    content: string;
    cmtDateTime: Date;
    userId: string;
    userAccount: UserAccount;
}
