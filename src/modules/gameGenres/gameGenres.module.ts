import { Module } from "@nestjs/common";
import { GameGenreController } from "./gameGenres.controller";
import { GameGenreService } from "./gameGenres.service";

@Module ({
    controllers: [GameGenreController],
    providers: [GameGenreService],
})

export class GameGenreModule {}