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

    async AddSalePeriod(salePeriodInfo: SalePeriod) {
        const salePeriod = this.salePeriodRepo.create({
            'periodId': salePeriodInfo.periodId,
            'startDate': salePeriodInfo.startDate,
            'endDate': salePeriodInfo.endDate,
            'saleId': salePeriodInfo.saleId
        })
        await this.salePeriodRepo.save(salePeriod);
    }

    async GetSalePeriodById(Id: string) {
        return this.salePeriodRepo.createQueryBuilder('sale_period')
            .select([]).where('sale_period.periodId = :Id', {Id : Id}).getRawMany();
    }

    async GetAllSalePeriod() {
        return this.salePeriodRepo.find();
    }

    async UpdateSalePeriod(salePeriodInfo: SalePeriod) {
        await this.salePeriodRepo.update(salePeriodInfo.periodId,
            {
                'startDate': salePeriodInfo.startDate,
                'endDate': salePeriodInfo.endDate,
                'saleId': salePeriodInfo.saleId
            }    
        );
    }

    async RemoveSalePeriod(Id: string) {
        await this.salePeriodRepo.createQueryBuilder()
            .delete().from(SalePromotion).where('periodId = :Id', {Id: Id}).execute();
    }
}