import { Entity, PrimaryColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn} from 'typeorm';
import { Comment } from './comment.entity'; // Import the Comment entity if it's in a separate file.
import { Game } from './game.entity'; // Import the Game entity if it's in a separate file.

@Entity('comment_game')
export class CommentGame {
  @PrimaryGeneratedColumn()
  commentId: string;

  @PrimaryColumn({ type: 'char', length: 10 })
  gameId: string;

  @ManyToOne(() => Comment, (comment) => comment.commentId)
  @JoinColumn({ name: 'commentId' })
  comment: Comment;

  @ManyToOne(() => Game, (game) => game.gameId)
  @JoinColumn({ name: 'gameId' })
  game: Game;
}
