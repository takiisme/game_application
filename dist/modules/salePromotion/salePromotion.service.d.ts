import { Repository } from 'typeorm';
import { SalePromotion } from 'src/entities/salePromotion.entity';
export declare class SalePromotionService {
    private readonly salePromotionRepo;
    constructor(salePromotionRepo: Repository<SalePromotion>);
    GetAllSalePromotion(): Promise<SalePromotion[]>;
}
