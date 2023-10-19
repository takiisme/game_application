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

    async AddSalePromotion(salePromotionInfo: SalePromotion): Promise<{success: boolean, message: string}> {
        try {
            const salePromotion = this.salePromotionRepo
            .create({
                'saleId': salePromotionInfo.saleId,
                'saleName': salePromotionInfo.saleName
            })
            await this.salePromotionRepo.save(salePromotion);

            return {
                success: true,
                message: 'Record added successfully.'
            }
        }
        catch(error) {
            if(error.code === '23505') {
                return {
                    success: false,
                    message: "Record ID is taken already."
                }
            }

            return {
                success: false,
                message: "An error occured while adding the record."
            }
        }
    }

    async GetSalePromotionById(Id: string): Promise<SalePromotion[]> {
        try {
            return this.salePromotionRepo
            .createQueryBuilder('sale_prmotion')
                .select([])
                .where('sale_promotion.saleId = :Id', {Id: Id})
                .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetAllSalePromotion(): Promise<SalePromotion[]> {
        try {
            return this.salePromotionRepo.find();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async UpdateSalePromotion(salePromotionInfo: SalePromotion): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.salePromotionRepo
            .update(salePromotionInfo.saleId,
                {
                    'saleName': salePromotionInfo.saleName
                }
            );

            if (result.affected === 0) {
                return {
                    success: false,
                    message: 'Record Id does not exist.'
                }
            }
            else {
                return {
                    success: true,
                    message: 'Record updated successfully.'
                }
            }
        }
        catch(error) {
            return {
                success: false,
                message: 'An error occured while updating the record.'
            }
        }
    }

    async RemoveSalePromotion(Id: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.salePromotionRepo
            .createQueryBuilder()
            .delete()
            .from(SalePromotion)
            .where('saleId = :Id', { Id: Id })
            .execute();

            if(result.affected === 0) {
                return {
                    success: false,
                    message: 'Record Id does not exist.'
                }
            }
            else {
                return {
                    success: true,
                    message: 'Record deleted successfully.'
                }
            }
        }
        catch(error) {
            return {
                success: false,
                message: 'An error occured while deleting the record.'
            }
        }
    }
}