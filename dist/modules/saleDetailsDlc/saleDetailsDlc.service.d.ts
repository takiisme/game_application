import { Repository } from 'typeorm';
import { SaleDetailsDlc } from 'src/entities/saleDetailsDlc.entity';
export declare class SaleDetailsDlcService {
    private readonly saleDetailsDlcRepo;
    constructor(saleDetailsDlcRepo: Repository<SaleDetailsDlc>);
    GetAllSaleDetailsDlc(): Promise<SaleDetailsDlc[]>;
}
