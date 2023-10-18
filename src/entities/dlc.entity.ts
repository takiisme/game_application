import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Developer } from './developer.entity'; // Import the Developer entity if it's in a separate file.
import { Game } from './game.entity'; // Import the Game entity if it's in a separate file.

@Entity('dlc')
export class Dlc {
  @PrimaryColumn({ type: 'char', length: 10 })
  dlcId: string;

  @Column({ type: 'varchar', length: 45 })
  dlcName: string;

  @Column('text')
  description: string;

  @Column('datetime')
  releaseDate: Date;

  @Column('int')
  price: number;

  @Column({ type: 'char', length: 8 })
  devId: string;

  @Column({ type: 'char', length: 10 })
  gameId: string;

  @ManyToOne(() => Developer, (developer) => developer.devId)
  @JoinColumn({ name: 'devId' })
  developer: Developer;

  @ManyToOne(() => Game, (game) => game.gameId)
  @JoinColumn({ name: 'gameId' })
  game: Game;
}
