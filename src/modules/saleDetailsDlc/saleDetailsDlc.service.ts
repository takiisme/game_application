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

    async AddSaleDetailsDlc(saleDetailsDlcInfo: SaleDetailsDlc): Promise<{success: boolean, message: string}> {
        try {
            const saleDetailsGame = this.saleDetailsDlcRepo
            .create({
                'periodId': saleDetailsDlcInfo.periodId,
                'dlcId': saleDetailsDlcInfo.dlcId,
                'discountRate': saleDetailsDlcInfo.discountRate
            })
            await this.saleDetailsDlcRepo.save(saleDetailsGame);

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

    async GetAllSaleDetailsDlc(): Promise<SaleDetailsDlc[]> {
        try {
            return this.saleDetailsDlcRepo.find();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetSaleDetailsDlcByDlcId(Id: string): Promise<SaleDetailsDlc[]> {
        try {
            return this.saleDetailsDlcRepo
            .createQueryBuilder('sale_details_dlc')
            .select([])
            .where('sale_details_dlc.dlcId = :Id', {Id: Id})
            .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetSaleDetailsDlcByPeriodId(Id: string): Promise<SaleDetailsDlc[]> {
        try {
            return this.saleDetailsDlcRepo
            .createQueryBuilder('sale_details_dlc')
            .select([])
            .where('sale_details_dlc.periodId = :Id', {Id: Id})
            .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetSaleDetailsDlcBySaleId(Id: string): Promise<SaleDetailsDlc[]> {
        try {
            return this.saleDetailsDlcRepo
            .createQueryBuilder('sale_details_dlc')
            .select([])
            .where('sale_details_dlc.saleId = :Id', {Id: Id})
            .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async UpdateSaleDetailsDlc(saleDetailsDlcInfo: SaleDetailsDlc): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.saleDetailsDlcRepo
            .update(
                {
                    'periodId': saleDetailsDlcInfo.periodId,
                    'dlcId': saleDetailsDlcInfo.dlcId,
                },
                {
                    'discountRate': saleDetailsDlcInfo.discountRate
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

    async RemoveSaleDetailsDlc(PeriodId: string, DlcId: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.saleDetailsDlcRepo
            .createQueryBuilder()
            .delete()
            .from(SaleDetailsDlc)
            .where('periodId = :PeriodId AND dlcId = :DlcId', {PeriodId: PeriodId, DlcId: DlcId})
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