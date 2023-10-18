import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Game } from './game.entity'; // Import the Game entity if it's in a separate file.
import { UserAccount } from './userAccount.entity'; // Import the UserAccount entity if it's in a separate file.

@Entity('game_rating')
export class GameRating {
  @PrimaryColumn({ type: 'char', length: 10 })
  userId: string;

  @PrimaryColumn({ type: 'char', length: 10 })
  gameId: string;

  @Column('date')
  ratingDate: Date;

  @Column('int')
  ratingStar: number;

  @ManyToOne(() => Game, (game) => game.gameId)
  @JoinColumn({ name: 'gameId' })
  game: Game;

  @ManyToOne(() => UserAccount, (userAccount) => userAccount.userId)
  @JoinColumn({ name: 'userId' })
  userAccount: UserAccount;
}