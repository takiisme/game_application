import { Module } from "@nestjs/common";
import { DlcRatingController } from "./dlcRating.controller";
import { DlcRatingService } from "./dlcRating.service";

@Module ({
    controllers: [DlcRatingController],
    providers: [DlcRatingService],
})

export class DlcRatingModule {}