import { Repository } from "typeorm";
import { BillingDetailsGame } from "src/entities/billingDetailsGame.entity";
export declare class BillingDetailsGameService {
    private readonly billingDetailsGameRepo;
    constructor(billingDetailsGameRepo: Repository<BillingDetailsGame>);
    GetAllBillingDetailsGame(): Promise<BillingDetailsGame[]>;
}
