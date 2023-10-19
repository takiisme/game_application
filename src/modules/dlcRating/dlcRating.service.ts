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

    async AddDlcRating(dlcRatingInfo: DlcRating): Promise<{success: boolean, message: string}> {
        try {
            const dlcRating = this.dlcRatingRepo
            .create({
                'userId': dlcRatingInfo.userId,
                'dlcId': dlcRatingInfo.dlcId,
                'ratingDate': dlcRatingInfo.ratingDate,
                'ratingStar': dlcRatingInfo.ratingStar
            })
            await this.dlcRatingRepo.save(dlcRating);

            return {
                success: true,
                message: 'Record added successfully.'
            }
        }
        catch(error) {
            if(error.code === '23505') {
                return {
                    success: false,
                    message: "Record ID is taken already."
                }
            }

            return {
                success: false,
                message: "An error occured while adding the record."
            }
        }
    }

    async GetDlcRatingByUserId(UserId: string): Promise<DlcRating[]> {
        try {
            return this.dlcRatingRepo
            .createQueryBuilder('dlc_rating')
            .select([])
            .where('dlc_rating.userId = :UserId', {UserId : UserId})
            .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetDlcRatingByDlcId(DlcId: string): Promise<DlcRating[]> {
        try {
            return this.dlcRatingRepo
            .createQueryBuilder('dlc_rating')
            .select([])
            .where('dlc_rating.dlcId = :DlcId', {DlcId : DlcId})
            .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetAllDlcRating(): Promise<DlcRating[]> {
        try {
            return this.dlcRatingRepo.find();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async UpdateDlcRating(dlcRatingInfo: DlcRating): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.dlcRatingRepo
            .update(
                {  
                    'userId': dlcRatingInfo.userId,
                    'dlcId': dlcRatingInfo.dlcId
                },
                {
                    'ratingDate': dlcRatingInfo.ratingDate,
                    'ratingStar': dlcRatingInfo.ratingStar
                }
            );

            if (result.affected === 0) {
                return {
                    success: false,
                    message: 'Record Id does not exist.'
                }
            }
            else {
                return {
                    success: true,
                    message: 'Record updated successfully.'
                }
            }
        }
        catch(error) {
            return {
                success: false,
                message: 'An error occured while updating the record.'
            }
        }
    }

    async RemoveDlcRating(UserId: string, DlcId: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.dlcRatingRepo
            .createQueryBuilder()
            .delete()
            .from(DlcRating)
            .where('dlcId = :DlcId AND userId = :UserId', {UserId: UserId, DlcId: DlcId})
            .execute();

            if(result.affected === 0) {
                return {
                    success: false,
                    message: 'Record Id does not exist.'
                }
            }
            else {
                return {
                    success: true,
                    message: 'Record deleted successfully.'
                }
            }
        }
        catch(error) {
            return {
                success: false,
                message: 'An error occured while deleting the record.'
            }
        }
    }
}