import { SaleDetailsDlc } from 'src/entities/saleDetailsDlc.entity';
import { SaleDetailsDlcService } from './saleDetailsDlc.service';
export declare class SaleDetailsDlcController {
    private readonly saleDetailsDlcService;
    constructor(saleDetailsDlcService: SaleDetailsDlcService);
    GetAllSaleDetailsDls(): Promise<SaleDetailsDlc[]>;
}
