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

    async AddDeveloper(developerInfo: Developer) {
        const developer = this.developerRepo.create({
            'devId': developerInfo.devId,
            'devName': developerInfo.devName,
            'country': developerInfo.country,
            'games': developerInfo.games,
        })
        await this.developerRepo.save(developer);
    }

    async GetAllDevelopers() {
        return this.developerRepo.find();
    }

    async GetDeveloperById(Id: string) {
        return this.developerRepo.createQueryBuilder('dev')
        .select([]).where('dev.devId = :Id', {Id: Id}).getRawMany();
    }

    async UpdateDeveloper(developerInfo: Developer) {
        await this.developerRepo.update(developerInfo.devId,
            {
                'devName': developerInfo.devName,
                'country': developerInfo.country,
                'games': developerInfo.games,
            });
    }

    async RemoveDeveloper(Id: string) {
        await this.developerRepo.createQueryBuilder()
            .delete().from(Developer).where('devId = :Id', {Id: Id}).execute();
    }
}