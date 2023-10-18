import { Module } from "@nestjs/common";
import { GameRatingController } from "./gameRating.controller";
import { GameRatingService } from "./gameRating.service";

@Module({
    controllers: [GameRatingController],
    providers: [GameRatingService]
})

export class GameRatingModule {}