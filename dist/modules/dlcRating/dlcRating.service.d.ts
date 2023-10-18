import { Repository } from 'typeorm';
import { DlcRating } from 'src/entities/dlcRating.entity';
export declare class DlcRatingService {
    private readonly dlcRatingRepo;
    constructor(dlcRatingRepo: Repository<DlcRating>);
    GetAllDlcRating(): Promise<DlcRating[]>;
}
