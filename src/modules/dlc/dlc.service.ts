import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dlc } from 'src/entities/dlc.entity';

@Injectable()
export class DlcService {
    constructor(
        @InjectRepository(Dlc)
        private readonly dlcRepo: Repository<Dlc>,
    ) {}

    async AddDlc(dlcInfo: Dlc): Promise<{success: boolean, message: string}> {
        try {
            const dlc = this.dlcRepo
            .create({
                'dlcId': dlcInfo.dlcId,
                'dlcName': dlcInfo.dlcName,
                'description': dlcInfo.description,
                'releaseDate': dlcInfo.releaseDate,
                'price': dlcInfo.price,
                'devId': dlcInfo.devId,
                'gameId': dlcInfo.gameId
            })
            await this.dlcRepo.save(dlc);

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

    async GetAllDlc(): Promise<Dlc[]> {
        try {
            return this.dlcRepo.find();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetDlcById(Id: string): Promise<Dlc[]> {
        try {
            return this.dlcRepo
            .createQueryBuilder('dlc')
                .select([])
                .where('dlc.dlcId =: Id', {Id: Id})
                .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async UpdateDlc(dlcInfo: Dlc): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.dlcRepo
            .update(dlcInfo.dlcId,
                {
                    'dlcName': dlcInfo.dlcName,
                    'description': dlcInfo.description,
                    'releaseDate': dlcInfo.releaseDate,
                    'price': dlcInfo.price,
                    'devId': dlcInfo.devId,
                    'gameId': dlcInfo.gameId
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

    async RemoveDlc(Id: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.dlcRepo
            .createQueryBuilder()
                .delete()
                .from(Dlc)
                .where('dlcId = :Id', {Id: Id})
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