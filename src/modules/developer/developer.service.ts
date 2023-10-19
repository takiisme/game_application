import { Injectable} from "@nestjs/common";
import { InjectRepository} from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Developer } from "../../entities/developer.entity";

@Injectable()
export class DeveloperService {
    constructor(
        @InjectRepository(Developer)
        private readonly developerRepo: Repository<Developer>,
    ){}

    async AddDeveloper(developerInfo: Developer): Promise<{success: boolean, message: string}> {
        try {
            const developer = this.developerRepo
            .create({
                'devId': developerInfo.devId,
                'devName': developerInfo.devName,
                'country': developerInfo.country,
                'games': developerInfo.games,
            })
            await this.developerRepo.save(developer);

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

    async GetAllDevelopers(): Promise<Developer[]> {
        try {
            return this.developerRepo.find();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async GetDeveloperById(Id: string): Promise<Developer[]> {
        try {
            return this.developerRepo
            .createQueryBuilder('dev')
                .select([])
                .where('dev.devId = :Id', {Id: Id})
                .getRawMany();
        }
        catch(error) {
            throw new Error("An error occured while fetching records");
        }
    }

    async UpdateDeveloper(developerInfo: Developer): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.developerRepo
            .update(developerInfo.devId,
                {
                    'devName': developerInfo.devName,
                    'country': developerInfo.country,
                    'games': developerInfo.games,
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

    async RemoveDeveloper(Id: string): Promise<{success: boolean, message: string}> {
        try {
            const result = await this.developerRepo
            .createQueryBuilder()
                .delete()
                .from(Developer)
                .where('devId = :Id', {Id: Id})
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