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
import { response, Response } from 'express';
import { BillingDetailsGame } from 'src/entities/billingDetailsGame.entity';
import { BillingDetailsGameService } from './billingDetailsGame.service';

@Controller('billing_details_game')
export class BillingDetailsGameController {
    constructor(
        private readonly billingDetailsGameService : BillingDetailsGameService
    ) {}

    @Post('add')
    async AddBillingDetailsGame(
        @Body() billingInfoGame: BillingDetailsGame,
        @Res() response: Response
    ) {
        const {success, message} = await this.billingDetailsGameService.AddBillingDetailsGame(billingInfoGame);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
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
        @Body() billingInfoGame: BillingDetailsGame,
        @Res() response: Response
    ) {
        const {success, message} = await this.billingDetailsGameService.UpdateBillingDetailsGame(billingInfoGame);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }

    @Delete('delete') 
    async DeleteBillingDetailsGame (
        @Body() billingInfoGame: BillingDetailsGame,
        @Res() response: Response
    ) {
        const {success, message} = await this.billingDetailsGameService.RemoveBillingDetailsGame(billingInfoGame.billingId, billingInfoGame.gameId);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }
}