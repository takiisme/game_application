import { Module } from "@nestjs/common/decorators";
import { UserAccountController } from "./userAccount.controller";
import { UserAccountService } from "./userAccount.service";

@Module ({
    controllers: [UserAccountController],
    providers: [UserAccountService],
})

export class UserAccountModule {}