import { Genre } from 'src/entities/genre.entity';
import { GenreService } from './genre.service';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    GetAllGenre(): Promise<Genre[]>;
}
