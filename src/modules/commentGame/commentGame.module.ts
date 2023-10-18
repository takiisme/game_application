import { Module } from "@nestjs/common";
import { CommentGameController } from "./commentGame.controller";
import { CommentGameService} from "./commentGame.service";

@Module ({
    controllers: [CommentGameController],
    providers: [CommentGameService],
})

export class CommentGameModule {}