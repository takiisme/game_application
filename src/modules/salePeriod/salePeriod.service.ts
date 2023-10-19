import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SalePeriod } from 'src/entities/salePeriod.entity';
import { SalePromotion } from 'src/entities/salePromotion.entity';

@Injectable() 
export class SalePeriodService {
    constructor(
        @InjectRepository(SalePeriod)
        private readonly salePeriodRepo: Repository<SalePeriod>,
    ) {}

    async AddSalePeriod(salePeriodInfo: SalePeriod): Promise<{success: boolean, message: string}> {
        try {
            const salePeriod = this.salePeriodRepo
            .create({
                'periodId': salePeriodInfo.periodId,
                'startDate': salePeriodInfo.startDate,
                'endDate': salePeriodInfo.endDate,
                'saleId': salePeriodInfo.saleId
            })
            await this.salePeriodRepo.save(salePeriod);

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

    async GetSalePeriodById(Id: string): Promise<SalePeriod[]> {
        try {
            return this.salePeriodRepo
            .createQueryBuilder('sale_period')
            .select([])
            .where('sale_period.periodId = :Id', {Id : Id})
            .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetAllSalePeriod(): Promise<SalePeriod[]> {
        try {
            return this.salePeriodRepo.find();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async UpdateSalePeriod(salePeriodInfo: SalePeriod): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.salePeriodRepo
            .update(salePeriodInfo.periodId,
                {
                    'startDate': salePeriodInfo.startDate,
                    'endDate': salePeriodInfo.endDate,
                    'saleId': salePeriodInfo.saleId
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

    async RemoveSalePeriod(Id: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.salePeriodRepo
            .createQueryBuilder()
            .delete()
            .from(SalePromotion)
            .where('periodId = :Id', {Id: Id})
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