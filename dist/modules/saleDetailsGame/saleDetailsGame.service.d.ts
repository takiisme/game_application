import { Repository } from 'typeorm';
import { SaleDetailsGame } from 'src/entities/saleDetailsGame.entity';
export declare class SaleDetailsGameService {
    private readonly saleDetailsGameRepo;
    constructor(saleDetailsGameRepo: Repository<SaleDetailsGame>);
    GetAllSaleDetailsGame(): Promise<SaleDetailsGame[]>;
}
