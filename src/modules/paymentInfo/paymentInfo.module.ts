import { Module } from "@nestjs/common";
import { PaymentInfoController } from "./paymentInfo.controller";
import { PaymentInfoService } from "./paymentInfo.service";

@Module ({
    controllers: [PaymentInfoController],
    providers: [PaymentInfoService]
})

export class paymentInfoModule {}