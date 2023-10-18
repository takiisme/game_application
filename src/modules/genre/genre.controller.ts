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
        @Body() genreInfo: Genre
    ) {
        return this.genreService.AddGenre(genreInfo);
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
        @Body() genreInfo: Genre
    ) {
        return this.genreService.UpdateGenre(genreInfo);
    }

    @Delete('delete/:Id')
    async DeleteGenre(@Param('Id') Id: string) {
        return this.genreService.RemoveGenre(Id);
    }
}