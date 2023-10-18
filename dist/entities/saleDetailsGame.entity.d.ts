import { Game } from './game.entity';
import { SalePeriod } from './salePeriod.entity';
import { SalePromotion } from './salePromotion.entity';
export declare class SaleDetailsGame {
    periodId: number;
    gameId: string;
    discountRate: number;
    game: Game;
    salePeriod: SalePeriod;
    salePromotion: SalePromotion;
}
