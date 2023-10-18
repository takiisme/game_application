import { Dlc } from 'src/entities/dlc.entity';
import { DlcService } from './dlc.service';
export declare class DlcController {
    private readonly dlcService;
    constructor(dlcService: DlcService);
    GetAllDlc(): Promise<Dlc[]>;
}
