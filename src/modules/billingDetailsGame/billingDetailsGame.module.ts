import { Module } from "@nestjs/common";
import { BillingDetailsGameController } from "./billingDetailsGame.controller";
import { BillingDetailsGameService } from "./billingDetailsGame.service";

@Module ({
    controllers: [BillingDetailsGameController],
    providers: [BillingDetailsGameService],
})

export class BillingDetailsGameModule {}