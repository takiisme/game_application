import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from 'src/entities/genre.entity';

@Injectable() 
export class GenreService {
    constructor(
        @InjectRepository(Genre)
        private readonly genreRepo: Repository<Genre>,
    ) {}

    async AddGenre(genreInfo: Genre) {
        const genre = this.genreRepo.create({
            'genreId': genreInfo.genreId,
            'genreName': genreInfo.genreName
        })
        await this.genreRepo.save(genre);
    }

    async GetGenreById(Id: string) {
        return this.genreRepo.createQueryBuilder('genre')
            .select([]).where('genre.genreId = :Id', {Id: Id}).getRawMany();
    }

    async GetAllGenre() {
        return this.genreRepo.find();
    }

    async UpdateGenre(genreInfo : Genre) {
        await this.genreRepo.update(genreInfo.genreId,
            {
                'genreName': genreInfo.genreName
            }
        );
    }

    async RemoveGenre(Id: string) {
        await this.genreRepo.createQueryBuilder()
            .delete().from(Genre).where('genreId = :Id', {Id: Id}).execute();
    }
}