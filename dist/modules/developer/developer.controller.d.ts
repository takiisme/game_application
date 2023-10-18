import { Developer } from 'src/entities/developer.entity';
import { DeveloperService } from './developer.service';
export declare class DeveloperController {
    private readonly developerService;
    constructor(developerService: DeveloperService);
    AddDeveloper(developerInfo: Developer): Promise<void>;
    GetAllDevelopers(): Promise<Developer[]>;
    GetDeveloperById(Id: string): Promise<any[]>;
    UpdateDeveloper(developerInfo: Developer): Promise<void>;
    DeleteDeveloperById(Id: string): Promise<void>;
}
