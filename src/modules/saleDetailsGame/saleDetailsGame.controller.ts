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
import { SaleDetailsGame } from 'src/entities/saleDetailsGame.entity';
import { SaleDetailsGameService } from './saleDetailsGame.service';

@Controller('sale_details_game')
export class SaleDetailsGameController {
    constructor(
        private readonly saleDetailsGameService : SaleDetailsGameService
    ) {}

    @Post('add')
    async AddSaleDetailsGame(
        @Body() saleDetailsGameInfo: SaleDetailsGame
    ) {
        return this.saleDetailsGameService.AddSaleDetailsGame(saleDetailsGameInfo);
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
        @Body() saleDetailsGameInfo: SaleDetailsGame
    ) {
        return this.saleDetailsGameService.UpdateSaleDetailsGame(saleDetailsGameInfo);
    }

    @Delete('delete')
    async DeleteSaleDetailsGame(
        @Body() saleDetailsGameInfo: SaleDetailsGame
    ) {
        return this.saleDetailsGameService.RemoveSaleDetailsGame(saleDetailsGameInfo.periodId.toString(), saleDetailsGameInfo.gameId);
    }
}