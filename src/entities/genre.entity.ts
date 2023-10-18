import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { GameGenre } from './gameGenres.entity'; // Import the GameGenre entity if it's in a separate file.

@Entity('genre')
export class Genre {
  @PrimaryGeneratedColumn()
  genreId: number;

  @Column({ type: 'varchar', length: 45 })
  genreName: string;

  @OneToMany(() => GameGenre, (gameGenre) => gameGenre.genre)
  games: GameGenre[];
}
