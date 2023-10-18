import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Game } from './game.entity'; 

@Entity('developer')
export class Developer {
  @PrimaryColumn({ type: 'char', length: 8 })
  devId: string;

  @Column({ type: 'varchar', length: 45 })
  devName: string;

  @Column({ type: 'varchar', length: 45 })
  country: string;

  @OneToMany(() => Game, (game) => game.developer)
  games: Game[];
}
