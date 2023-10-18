import { Module } from "@nestjs/common";
import { SaleDetailsGameController } from "./saleDetailsGame.controller";
import { SaleDetailsGameService } from "./saleDetailsGame.service";

@Module ({
    controllers: [SaleDetailsGameController],
    providers: [SaleDetailsGameService]
})

export class SaleDetailsGameModule {}