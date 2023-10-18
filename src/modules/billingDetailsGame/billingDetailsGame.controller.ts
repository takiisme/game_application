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
import { BillingDetailsGame } from 'src/entities/billingDetailsGame.entity';
import { BillingDetailsGameService } from './billingDetailsGame.service';

@Controller('billing_details_game')
export class BillingDetailsGameController {
    constructor(
        private readonly billingDetailsGameService : BillingDetailsGameService
    ) {}

    @Post('add')
    async AddBillingDetailsGame(
        @Body() billingInfoGame: BillingDetailsGame
    ) {
        return this.billingDetailsGameService.AddBillingDetailsGame(billingInfoGame);
    }

    @Get('getall')
    async GetAllBillingDetailsGame() {
        return this.billingDetailsGameService.GetAllBillingDetailsGame();
    }

    @Get('get/:BillingId')
    async GetBillingDetailsGameByBillingId(@Param('Id') Id: string) {
        return this.billingDetailsGameService.GetBillingDetailGameByBillingId(Id);
    }

    @Get('get/:GameId')
    async GetBillingDetailsGameByGameId(@Param('Id') Id: string) {
        return this.billingDetailsGameService.GetBillingDetailGameByGameId(Id);
    }

    @Put('update')
    async UpdateBillingDetailsGame(
        @Body() billingInfoGame: BillingDetailsGame
    ) {
        return this.billingDetailsGameService.UpdateBillingDetailsGame(billingInfoGame);
    }

    @Delete('delete') 
    async DeleteBillingDetailsGame (
        @Body() billingInfoGame: BillingDetailsGame
    ) {
        return this.billingDetailsGameService.RemoveBillingDetailsGame(billingInfoGame.billingId, billingInfoGame.gameId);
    }
}