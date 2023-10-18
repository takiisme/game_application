import { Repository } from 'typeorm';
import { SalePeriod } from 'src/entities/salePeriod.entity';
export declare class SalePeriodService {
    private readonly salePeriodRepo;
    constructor(salePeriodRepo: Repository<SalePeriod>);
    GetAllSalePeriod(): Promise<SalePeriod[]>;
}
