import { Repository } from 'typeorm';
import { Dlc } from 'src/entities/dlc.entity';
export declare class DlcService {
    private readonly dlcRepo;
    constructor(dlcRepo: Repository<Dlc>);
    GetAllDlc(): Promise<Dlc[]>;
}
