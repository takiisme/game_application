import { SaleDetailsGame } from 'src/entities/saleDetailsGame.entity';
import { SaleDetailsGameService } from './saleDetailsGame.service';
export declare class SaleDetailsGameController {
    private readonly saleDetailsGameService;
    constructor(saleDetailsGameService: SaleDetailsGameService);
    GetAllDetailsGame(): Promise<SaleDetailsGame[]>;
}
