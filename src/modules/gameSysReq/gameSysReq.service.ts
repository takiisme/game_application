import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameSysReq } from 'src/entities/gameSysReq.entity';

@Injectable() 
export class GameSysReqService {
    constructor(
        @InjectRepository(GameSysReq)
        private readonly gameSysReqRepo: Repository<GameSysReq>,
    ) {}

    async AddGameSysReq(gameSysReqInfo: GameSysReq) {
        const gameSysReq = this.gameSysReqRepo.create({
            'gameId': gameSysReqInfo.gameId,
            'reqType': gameSysReqInfo.reqType,
            'ram': gameSysReqInfo.ram,
            'os': gameSysReqInfo.os,
            'gpu': gameSysReqInfo.gpu,
            'cpu': gameSysReqInfo.cpu,
            'minStorage': gameSysReqInfo.minStorage
        })
        await this.gameSysReqRepo.save(gameSysReq);
    }

    async GetGameSysReqByGameId(Id: string) {
        return this.gameSysReqRepo.createQueryBuilder('game_sys_req')
            .select([]).where('game_sys_req.gameId = :Id', {Id : Id}).getRawMany();
    }

    async GetAllGameSysReq() {
        return this.gameSysReqRepo.find();
    }

    async UpdateGameSysReq(gameSysReqInfo: GameSysReq) {
        await this.gameSysReqRepo.update(
            {
                'gameId': gameSysReqInfo.gameId,
                'reqType': gameSysReqInfo.reqType
            },
            {
                'ram': gameSysReqInfo.ram,
                'os': gameSysReqInfo.os,
                'gpu': gameSysReqInfo.gpu,
                'cpu': gameSysReqInfo.cpu,
                'minStorage': gameSysReqInfo.minStorage
            }
        );
    }

    async RemoveGameSysReq(GameId: string, ReqType: string) {
        await this.gameSysReqRepo.createQueryBuilder()
            .delete().from(GameSysReq).where('gameId = :GameId, reqType = :ReqType', {GameId : GameId, ReqType: ReqType}).execute();
    }
}