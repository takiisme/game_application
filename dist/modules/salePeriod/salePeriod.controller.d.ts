import { SalePeriod } from 'src/entities/salePeriod.entity';
import { SalePeriodService } from './salePeriod.service';
export declare class SalePeriodController {
    private readonly salePeriodService;
    constructor(salePeriodService: SalePeriodService);
    GetAllSalePeriod(): Promise<SalePeriod[]>;
}
