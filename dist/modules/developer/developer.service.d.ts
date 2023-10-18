import { Repository } from "typeorm";
import { Developer } from "../../entities/developer.entity";
export declare class DeveloperService {
    private readonly developerRepo;
    constructor(developerRepo: Repository<Developer>);
    AddDeveloper(developerInfo: Developer): Promise<void>;
    GetAllDevelopers(): Promise<Developer[]>;
    GetDeveloperById(Id: string): Promise<any[]>;
    UpdateDeveloper(developerInfo: Developer): Promise<void>;
    RemoveDeveloper(Id: string): Promise<void>;
}
