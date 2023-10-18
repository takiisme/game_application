import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Delete,
    Put,
    Res,
    ValidationPipe,
} from '@nestjs/common';
import { UserAccount } from 'src/entities/userAccount.entity';
import { UserAccountService } from './userAccount.service';

@Controller('user_account')
export class UserAccountController {
    constructor(
        private readonly userAccountService : UserAccountService
    ) {}

    @Post('add')
    async AddUserAccount(
        @Body() userAccountInfo: UserAccount
    ) {
        return this.userAccountService.AddUserAccount(userAccountInfo);
    }

    @Get('getall')
    async GetAllUserAccount() {
        return this.userAccountService.GetAllUserAccount();
    }

    @Get('get/:Id')
    async GetUserAccountById(@Param('Id') Id: string) {
        return this.userAccountService.GetUserAccountById(Id);
    }

    @Put('update')
    async UpdateUserAccount(
        @Body() userAccountInfo: UserAccount
    ) {
        return this.userAccountService.UpdateUserAccount(userAccountInfo);
    }

    @Delete('delete/:Id')
    async DeleteUserAccount(@Param('Id') Id: string) {
        return this.userAccountService.RemoveUserAccount(Id);
    }
}