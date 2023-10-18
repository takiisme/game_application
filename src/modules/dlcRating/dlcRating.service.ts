import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DlcRating } from 'src/entities/dlcRating.entity';

@Injectable()
export class DlcRatingService {
    constructor(
        @InjectRepository(DlcRating)
        private readonly dlcRatingRepo: Repository<DlcRating>,
    ) {}

    async AddDlcRating(dlcRatingInfo: DlcRating) {
        const dlcRating = this.dlcRatingRepo.create({
            'userId': dlcRatingInfo.userId,
            'dlcId': dlcRatingInfo.dlcId,
            'ratingDate': dlcRatingInfo.ratingDate,
            'ratingStar': dlcRatingInfo.ratingStar
        })
        await this.dlcRatingRepo.save(dlcRating);
    }

    async GetDlcRatingByUserId(UserId: string) {
        return this.dlcRatingRepo.createQueryBuilder('dlc_rating')
            .select([]).where('dlc_rating.userId = :UserId', {UserId : UserId}).getRawMany();
    }

    async GetDlcRatingByDlcId(DlcId: string) {
        return this.dlcRatingRepo.createQueryBuilder('dlc_rating')
            .select([]).where('dlc_rating.dlcId = :DlcId', {DlcId : DlcId}).getRawMany();
    }

    async GetAllDlcRating() {
        return this.dlcRatingRepo.find();
    }

    async UpdateDlcRating(dlcRatingInfo: DlcRating) {
        await this.dlcRatingRepo.update(
            {  
                'userId': dlcRatingInfo.userId,
                'dlcId': dlcRatingInfo.dlcId
            },
            {
                'ratingDate': dlcRatingInfo.ratingDate,
                'ratingStar': dlcRatingInfo.ratingStar
            }
        );
    }

    async RemoveDlcRating(UserId: string, DlcId: string) {
        await this.dlcRatingRepo.createQueryBuilder()
            .delete().from(DlcRating).where('dlcId = :DlcId AND userId = :UserId', {UserId: UserId, DlcId: DlcId}).execute();
    }
}