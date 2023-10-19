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
import { Response } from 'express';
import { UserAccount } from 'src/entities/userAccount.entity';
import { UserAccountService } from './userAccount.service';

@Controller('user_account')
export class UserAccountController {
    constructor(
        private readonly userAccountService : UserAccountService
    ) {}

    @Post('add')
    async AddUserAccount(
        @Body() userAccountInfo: UserAccount,
        @Res() response: Response
    ) {
        const {success, message} = await this.userAccountService.AddUserAccount(userAccountInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
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
        @Body() userAccountInfo: UserAccount,
        @Res() response: Response
    ) {
        const {success, message} = await this.userAccountService.UpdateUserAccount(userAccountInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
    }

    @Delete('delete/:Id')
    async DeleteUserAccount(
        @Param('Id') Id: string,
        @Res() response: Response
    ) {
        const {success, message} = await this.userAccountService.RemoveUserAccount(Id);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
    }
}