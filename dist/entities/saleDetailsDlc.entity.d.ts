import { Dlc } from './dlc.entity';
import { SalePeriod } from './salePeriod.entity';
import { SalePromotion } from './salePromotion.entity';
export declare class SaleDetailsDlc {
    periodId: number;
    dlcId: string;
    discountRate: number;
    dlc: Dlc;
    salePeriod: SalePeriod;
    salePromotion: SalePromotion;
}
