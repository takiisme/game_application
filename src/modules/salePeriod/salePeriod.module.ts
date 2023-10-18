import { Module } from "@nestjs/common";
import { SalePeriodController } from "./salePeriod.controller";
import { SalePeriodService } from "./salePeriod.service";

@Module({
    controllers: [SalePeriodController],
    providers: [SalePeriodService]
})

export class SalePeriodModule {}