import { Billing } from './billing.entity';
import { Game } from './game.entity';
export declare class BillingDetailsGame {
    billingId: string;
    gameId: string;
    priceWithDiscount: number;
    serialKey: string;
    billing: Billing;
    game: Game;
}
