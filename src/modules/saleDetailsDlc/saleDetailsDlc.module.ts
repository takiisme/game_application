import { Module } from "@nestjs/common";
import { SaleDetailsDlcController } from "./saleDetailsDlc.controller";
import { SaleDetailsDlcService } from "./saleDetailsDlc.service";

@Module ({
    controllers: [SaleDetailsDlcController],
    providers: [SaleDetailsDlcService],
})

export class SaleDetailsDlcModule {}