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

    async AddGenre(genreInfo: Genre): Promise<{success: boolean, message: string}> {
        try {
            const genre = this.genreRepo
            .create({
                'genreId': genreInfo.genreId,
                'genreName': genreInfo.genreName
            })
            await this.genreRepo.save(genre);

            return {
                success: true,
                message: 'Record added successfully.'
            }
        }
        catch(error) {
            if(error.code === '23505') {
                return {
                    success: false,
                    message: "Record ID is taken already."
                }
            }

            return {
                success: false,
                message: "An error occured while adding the record."
            }
        }
    }

    async GetGenreById(Id: string): Promise<Genre[]> {
        try {
            return this.genreRepo
            .createQueryBuilder('genre')
            .select([])
            .where('genre.genreId = :Id', {Id: Id})
            .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetAllGenre(): Promise<Genre[]> {
        try {
            return this.genreRepo.find();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async UpdateGenre(genreInfo : Genre): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.genreRepo
            .update(genreInfo.genreId,
                {
                    'genreName': genreInfo.genreName
                }
            );

            if (result.affected === 0) {
                return {
                    success: false,
                    message: 'Record Id does not exist.'
                }
            }
            else {
                return {
                    success: true,
                    message: 'Record updated successfully.'
                }
            }
        }
        catch(error) {
            return {
                success: false,
                message: 'An error occured while updating the record.'
            }
        }
    }

    async RemoveGenre(Id: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.genreRepo
            .createQueryBuilder()
                .delete()
                .from(Genre)
                .where('genreId = :Id', {Id: Id})
                .execute();

            if(result.affected === 0) {
                return {
                    success: false,
                    message: 'Record Id does not exist.'
                }
            }
            else {
                return {
                    success: true,
                    message: 'Record deleted successfully.'
                }
            }
        }
        catch(error) {
            return {
                success: false,
                message: 'An error occured while deleting the record.'
            }
        }
    }
}