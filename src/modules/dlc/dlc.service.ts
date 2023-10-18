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

    async AddDlc(dlcInfo: Dlc) {
        const dlc = this.dlcRepo.create({
            'dlcId': dlcInfo.dlcId,
            'dlcName': dlcInfo.dlcName,
            'description': dlcInfo.description,
            'releaseDate': dlcInfo.releaseDate,
            'price': dlcInfo.price,
            'devId': dlcInfo.devId,
            'gameId': dlcInfo.gameId
        })
        await this.dlcRepo.save(dlc);
    }

    async GetAllDlc() {
        return this.dlcRepo.find();
    }

    async GetDlcById(Id: string) {
        return this.dlcRepo.createQueryBuilder('dlc')
            .select([]).where('dlc.dlcId =: Id', {Id: Id}).getRawMany();
    }

    async UpdateDlc(dlcInfo: Dlc) {
        await this.dlcRepo.update(dlcInfo.dlcId,
            {
                'dlcName': dlcInfo.dlcName,
                'description': dlcInfo.description,
                'releaseDate': dlcInfo.releaseDate,
                'price': dlcInfo.price,
                'devId': dlcInfo.devId,
                'gameId': dlcInfo.gameId
            }  
        );
    }

    async RemoveDlc(Id: string) {
        await this.dlcRepo.createQueryBuilder()
            .delete().from(Dlc).where('dlcId = :Id', {Id: Id}).execute();
    }
}