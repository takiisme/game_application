import { Module } from "@nestjs/common";
import { CommentDlcController } from "./commentDlc.controller";
import { CommentDlcService } from "./commentDlc.service";

@Module({
    controllers: [CommentDlcController],
    providers: [CommentDlcService],
})

export class CommentDlcModule {}