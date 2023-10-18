import { Entity, PrimaryColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from './comment.entity'; // Import the Comment entity if it's in a separate file.
import { Dlc } from './dlc.entity'; // Import the Dlc entity if it's in a separate file.

@Entity('comment_dlc')
export class CommentDlc {
  @PrimaryGeneratedColumn()
  commentId: string;

  @PrimaryColumn({ type: 'char', length: 10 })
  dlcId: string;

  @ManyToOne(() => Comment, (comment) => comment.commentId)
  @JoinColumn({ name: 'commentId' })
  comment: Comment;

  @ManyToOne(() => Dlc, (dlc) => dlc.dlcId)
  @JoinColumn({ name: 'dlcId' })
  dlc: Dlc;
}
