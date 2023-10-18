import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Game } from './game.entity'; // Import the Game entity if it's in a separate file.
import { Genre } from './genre.entity'; // Import the Genre entity if it's in a separate file.

@Entity('game_genres')
export class GameGenre {
  @PrimaryColumn({ type: 'char', length: 10 })
  gameId: string;

  @PrimaryColumn()
  genreId: number;

  @ManyToOne(() => Game, (game) => game.gameId)
  @JoinColumn({ name: 'gameId' })
  game: Game;

  @ManyToOne(() => Genre, (genre) => genre.games)
  @JoinColumn({ name: 'genreId' })
  genre: Genre;
}
