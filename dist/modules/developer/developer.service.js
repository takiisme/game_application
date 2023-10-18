"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeveloperService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const developer_entity_1 = require("../../entities/developer.entity");
let DeveloperService = class DeveloperService {
    constructor(developerRepo) {
        this.developerRepo = developerRepo;
    }
    async AddDeveloper(developerInfo) {
        const developer = this.developerRepo.create({
            'devId': developerInfo.devId,
            'devName': developerInfo.devName,
            'country': developerInfo.country,
            'games': developerInfo.games,
        });
        await this.developerRepo.save(developer);
    }
    async GetAllDevelopers() {
        return this.developerRepo.find();
    }
    async GetDeveloperById(Id) {
        return this.developerRepo.createQueryBuilder('dev')
            .select([]).where('dev.devId = :Id', { Id: Id }).getRawMany();
    }
    async UpdateDeveloper(developerInfo) {
        await this.developerRepo.update(developerInfo.devId, {
            'devName': developerInfo.devName,
            'country': developerInfo.country,
            'games': developerInfo.games,
        });
    }
    async RemoveDeveloper(Id) {
        await this.developerRepo.createQueryBuilder()
            .delete().from(developer_entity_1.Developer).where('devId = :Id', { Id: Id }).execute();
    }
};
exports.DeveloperService = DeveloperService;
exports.DeveloperService = DeveloperService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(developer_entity_1.Developer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DeveloperService);
//# sourceMappingURL=developer.service.js.map