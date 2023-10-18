import { DlcRating } from 'src/entities/dlcRating.entity';
import { DlcRatingService } from './dlcRating.service';
export declare class DlcRatingController {
    private readonly dlcRatingService;
    constructor(dlcRatingService: DlcRatingService);
    GetAllDlcRating(): Promise<DlcRating[]>;
}
