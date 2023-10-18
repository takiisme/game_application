import { Repository } from 'typeorm';
import { Genre } from 'src/entities/genre.entity';
export declare class GenreService {
    private readonly genreRepo;
    constructor(genreRepo: Repository<Genre>);
    GetAllGenre(): Promise<Genre[]>;
}
