import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Developer } from './developer.entity'; // Import the Developer entity if it's in a separate file.

@Entity('game')
export class Game {
  @PrimaryColumn({ type: 'char', length: 10 })
  gameId: string;

  @Column({ type: 'varchar', length: 100 })
  gameName: string;

  @Column('text')
  description: string;

  @Column('datetime')
  releaseDate: Date;

  @Column('int', { default: 0 })
  price: number;

  @Column({ type: 'char', length: 8 })
  devId: string;

  @ManyToOne(() => Developer, (developer) => developer.games)
  @JoinColumn({ name: 'devId' })
  developer: Developer;
}