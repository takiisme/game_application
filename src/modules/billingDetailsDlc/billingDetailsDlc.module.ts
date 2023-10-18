import { Module } from "@nestjs/common";
import { BillingDetailsDlcController } from "./billingDetailsDlc.controller";
import { BillingDetailsDlcService } from "./billingDetailsDlc.service";

@Module ({
    controllers: [BillingDetailsDlcController],
    providers: [BillingDetailsDlcService],
})

export class BillingDetailsDlcModule {}