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
import { SaleDetailsGame } from 'src/entities/saleDetailsGame.entity';
import { SaleDetailsGameService } from './saleDetailsGame.service';

@Controller('sale_details_game')
export class SaleDetailsGameController {
    constructor(
        private readonly saleDetailsGameService : SaleDetailsGameService
    ) {}

    @Post('add')
    async AddSaleDetailsGame(
        @Body() saleDetailsGameInfo: SaleDetailsGame,
        @Res() response: Response
    ) {
        const {success, message} = await this.saleDetailsGameService.AddSaleDetailsGame(saleDetailsGameInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
    }

    @Get('getall')
    async GetAllSaleDetailsGame() {
        return this.saleDetailsGameService.GetAllSaleDetailsGame();
    }

    @Get('get/:Id')
    async GetSaleDetailsGameByGameId(@Param('Id') Id: string) {
        return this.saleDetailsGameService.GetSaleDetailsGameByGameId(Id);
    }

    @Get('get/:Id')
    async GetSaleDetailsGameBySaleId(@Param('Id') Id: string) {
        return this.saleDetailsGameService.GetSaleDetailsGameBySaleId(Id);
    }

    @Get('get/:Id')
    async GetSaleDetailsGameByPeriodId(@Param('Id') Id: string) {
        return this.saleDetailsGameService.GetSaleDetailsGameByPeriodId(Id);
    }

    @Put('update')
    async UpdateSaleDetailsGame(
        @Body() saleDetailsGameInfo: SaleDetailsGame,
        @Res() response: Response
    ) {
        const {success, message} = await this.saleDetailsGameService.UpdateSaleDetailsGame(saleDetailsGameInfo);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }

    @Delete('delete')
    async DeleteSaleDetailsGame(
        @Body() saleDetailsGameInfo: SaleDetailsGame,
        @Res() response: Response
    ) {
        const {success, message} = await this.saleDetailsGameService.RemoveSaleDetailsGame(saleDetailsGameInfo.periodId.toString(), saleDetailsGameInfo.gameId);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }
}