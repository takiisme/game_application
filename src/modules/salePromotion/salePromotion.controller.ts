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
import { SalePromotion } from 'src/entities/salePromotion.entity';
import { SalePromotionService } from './salePromotion.service';

@Controller('sale_promotion')
export class SalePromotionController
{
    constructor(
        private readonly salePromotionService : SalePromotionService
    ) {}

    @Post('add')
    async AddSalePromotion(
        @Body() salePromotionInfo: SalePromotion
    ) {
        return this.salePromotionService.AddSalePromotion(salePromotionInfo);
    }

    @Get('getall')
    async GetAllSalePromotion() {
        return this.salePromotionService.GetAllSalePromotion();
    }

    @Get('get/:Id')
    async GetSalePromotionById(@Param('Id') Id: string) {
        return this.salePromotionService.GetSalePromotionById(Id);
    }

    @Put('update')
    async UpdateSalePromotion(
        @Body() salePromotionInfo: SalePromotion
    ) {
        return this.salePromotionService.UpdateSalePromotion(salePromotionInfo);
    }

    @Delete('delete/:Id')
    async DeleteSalePromotion(@Param('Id') Id: string) {
        return this.salePromotionService.RemoveSalePromotion(Id);
    }
}