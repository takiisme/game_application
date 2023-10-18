import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SalePromotion } from 'src/entities/salePromotion.entity';

@Injectable()
export class SalePromotionService {
    constructor(
        @InjectRepository(SalePromotion)
        private readonly salePromotionRepo: Repository<SalePromotion>,
    ) { }

    async AddSalePromotion(salePromotionInfo: SalePromotion) {
        const salePromotion = this.salePromotionRepo.create({
            'saleId': salePromotionInfo.saleId,
            'saleName': salePromotionInfo.saleName
        })
        await this.salePromotionRepo.save(salePromotion);
    }

    async GetSalePromotionById(Id: string) {
        return this.salePromotionRepo.createQueryBuilder('')
    }

    async GetAllSalePromotion() {
        return this.salePromotionRepo.find();
    }

    async UpdateSalePromotion(salePromotionInfo: SalePromotion) {
        await this.salePromotionRepo.update(salePromotionInfo.saleId,
            {
                'saleName': salePromotionInfo.saleName
            }
        );
    }

    async RemoveSalePromotion(Id: string) {
        await this.salePromotionRepo.createQueryBuilder()
            .delete().from(SalePromotion).where('saleId = :Id', { Id: Id }).execute();
    }
}