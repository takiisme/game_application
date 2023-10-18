import { BillingDetailsGame } from 'src/entities/billingDetailsGame.entity';
import { BillingDetailsGameService } from './billingDetailsGame.service';
export declare class BillingDetailsGameController {
    private readonly billingDetailsGameService;
    constructor(billingDetailsGameService: BillingDetailsGameService);
    GetAllBillingDetailsGame(): Promise<BillingDetailsGame[]>;
}
