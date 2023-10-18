import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Game } from './game.entity'; // Import the Game entity if it's in a separate file.

@Entity('game_sys_req')
export class GameSysReq {
  @PrimaryColumn({ type: 'char', length: 10 })
  gameId: string;

  @PrimaryColumn({ type: 'char', length: 3 })
  reqType: string;

  @Column('int')
  ram: number;

  @Column({ type: 'varchar', length: 100 })
  os: string;

  @Column({ type: 'varchar', length: 100 })
  gpu: string;

  @Column({ type: 'varchar', length: 100 })
  cpu: string;

  @Column('int')
  minStorage: number;

  @ManyToOne(() => Game, (game) => game.gameId)
  @JoinColumn({ name: 'gameId' })
  game: Game;
}
