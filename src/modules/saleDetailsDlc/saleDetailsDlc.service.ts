import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaleDetailsDlc } from 'src/entities/saleDetailsDlc.entity';

@Injectable()
export class SaleDetailsDlcService {
    constructor(
        @InjectRepository(SaleDetailsDlc)
        private readonly saleDetailsDlcRepo: Repository<SaleDetailsDlc>,
    ) {}

    async AddSaleDetailsDlc(saleDetailsDlcInfo: SaleDetailsDlc) {
        const saleDetailsGame = this.saleDetailsDlcRepo.create({
            'periodId': saleDetailsDlcInfo.periodId,
            'dlcId': saleDetailsDlcInfo.dlcId,
            'discountRate': saleDetailsDlcInfo.discountRate
        })
        await this.saleDetailsDlcRepo.save(saleDetailsGame);
    }

    async GetAllSaleDetailsDlc() {
        return this.saleDetailsDlcRepo.find();
    }

    async GetSaleDetailsDlcByDlcId(Id: string) {
        return this.saleDetailsDlcRepo.createQueryBuilder('sale_details_dlc')
            .select([]).where('sale_details_dlc.dlcId = :Id', {Id: Id}).getRawMany();
    }

    async GetSaleDetailsDlcByPeriodId(Id: string) {
        return this.saleDetailsDlcRepo.createQueryBuilder('sale_details_dlc')
            .select([]).where('sale_details_dlc.periodId = :Id', {Id: Id}).getRawMany();
    }

    async GetSaleDetailsDlcBySaleId(Id: string) {
        return this.saleDetailsDlcRepo.createQueryBuilder('sale_details_dlc')
            .select([]).where('sale_details_dlc.saleId = :Id', {Id: Id}).getRawMany();
    }

    async UpdateSaleDetailsDlc(saleDetailsDlcInfo: SaleDetailsDlc) {
        await this.saleDetailsDlcRepo.update(
            {
                'periodId': saleDetailsDlcInfo.periodId,
                'dlcId': saleDetailsDlcInfo.dlcId,
            },
            {
                'discountRate': saleDetailsDlcInfo.discountRate
            }
        );
    }

    async RemoveSaleDetailsDlc(PeriodId: string, DlcId: string) {
        await this.saleDetailsDlcRepo.createQueryBuilder()
            .delete().from(SaleDetailsDlc).where('periodId = :PeriodId AND dlcId = :DlcId', {PeriodId: PeriodId, DlcId: DlcId}).execute(); 
    }
}