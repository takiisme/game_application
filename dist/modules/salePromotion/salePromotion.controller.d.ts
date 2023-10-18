import { SalePromotion } from 'src/entities/salePromotion.entity';
import { SalePromotionService } from './salePromotion.service';
export declare class SalePromotionController {
    private readonly salePromotionService;
    constructor(salePromotionService: SalePromotionService);
    GetAllSalePromotion(): Promise<SalePromotion[]>;
}
