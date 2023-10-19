import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Delete,
    Put,
    Res,
    ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { Genre } from 'src/entities/genre.entity';
import { GenreService } from './genre.service';

@Controller('genre')
export class GenreController
{
    constructor(
        private readonly genreService : GenreService
    ) {}

    @Post('add')
    async AddGenre(
        @Body() genreInfo: Genre,
        @Res() response: Response
    ) {
        const {success, message} = await this.genreService.AddGenre(genreInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
    }

    @Get('getall')
    async GetAllGenre() {
        return this.genreService.GetAllGenre();
    }

    @Get('get/:Id')
    async GetGenreById(@Param('Id') Id: string) {
        return this.genreService.GetGenreById(Id);
    }

    @Put('update')
    async UpdateGenre(
        @Body() genreInfo: Genre,
        @Res() response: Response
    ) {
        const {success, message} = await this.genreService.UpdateGenre(genreInfo);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }

    @Delete('delete/:Id')
    async DeleteGenre(
        @Param('Id') Id: string,
        @Res() response: Response
    ) {
        const {success, message} = await this.genreService.RemoveGenre(Id);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }
}