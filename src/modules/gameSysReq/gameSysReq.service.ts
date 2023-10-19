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

    async AddGameSysReq(gameSysReqInfo: GameSysReq): Promise<{success: boolean, message: string}> {
        try {
            const gameSysReq = this.gameSysReqRepo
            .create({
                'gameId': gameSysReqInfo.gameId,
                'reqType': gameSysReqInfo.reqType,
                'ram': gameSysReqInfo.ram,
                'os': gameSysReqInfo.os,
                'gpu': gameSysReqInfo.gpu,
                'cpu': gameSysReqInfo.cpu,
                'minStorage': gameSysReqInfo.minStorage
            })
            await this.gameSysReqRepo.save(gameSysReq);

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

    async GetGameSysReqByGameId(Id: string): Promise<GameSysReq[]> {
        try {
            return this.gameSysReqRepo
            .createQueryBuilder('game_sys_req')
                .select([])
                .where('game_sys_req.gameId = :Id', {Id : Id})
                .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetAllGameSysReq(): Promise<GameSysReq[]> {
        try {
            return this.gameSysReqRepo.find();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async UpdateGameSysReq(gameSysReqInfo: GameSysReq): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.gameSysReqRepo
            .update(
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

    async RemoveGameSysReq(GameId: string, ReqType: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.gameSysReqRepo
            .createQueryBuilder()
            .delete()
            .from(GameSysReq)
            .where('gameId = :GameId, reqType = :ReqType', {GameId : GameId, ReqType: ReqType})
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