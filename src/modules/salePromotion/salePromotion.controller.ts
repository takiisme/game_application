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
        @Body() salePromotionInfo: SalePromotion,
        @Res() response: Response
    ) {
        const {success, message} = await this.salePromotionService.AddSalePromotion(salePromotionInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
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
        @Body() salePromotionInfo: SalePromotion,
        @Res() response: Response
    ) {
        const {success, message} = await this.salePromotionService.UpdateSalePromotion(salePromotionInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
    }

    @Delete('delete/:Id')
    async DeleteSalePromotion(
        @Param('Id') Id: string,
        @Res() response: Response
    ) {
        const {success, message} = await this.salePromotionService.RemoveSalePromotion(Id);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
    }
}