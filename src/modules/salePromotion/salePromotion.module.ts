import { Module } from "@nestjs/common";
import { SalePromotionController } from "./salePromotion.controller";
import { SalePromotionService } from "./salePromotion.service";

@Module({
    controllers: [SalePromotionController],
    providers: [SalePromotionService],
})

export class SalePromotionModule {}