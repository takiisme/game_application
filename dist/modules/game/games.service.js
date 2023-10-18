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
exports.GameService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const game_entity_1 = require("../../entities/game.entity");
let GameService = class GameService {
    constructor(gameRepo) {
        this.gameRepo = gameRepo;
    }
    async AddGame(gameInfo) {
        const game = this.gameRepo.create({
            'gameId': gameInfo.gameId,
            'gameName': gameInfo.gameName,
            'description': gameInfo.description,
            'releaseDate': gameInfo.releaseDate,
            'price': gameInfo.price,
            'devId': gameInfo.devId
        });
        await this.gameRepo.save(game);
    }
    async GetAllGames() {
        return this.gameRepo.find();
    }
    async GetGameById(Id) {
        return this.gameRepo.createQueryBuilder('game')
            .select([]).where('game.gameId=:Id', { Id: Id }).getRawMany();
    }
    async UpdateGame(gameInfo) {
        await this.gameRepo.update(gameInfo.gameId, {
            'gameName': gameInfo.gameName,
            'description': gameInfo.description,
            'releaseDate': gameInfo.releaseDate,
            'price': gameInfo.price,
            'devId': gameInfo.devId
        });
    }
    async RemoveGame(Id) {
        await this.gameRepo.createQueryBuilder()
            .delete().from(game_entity_1.Game).where('gameId = :Id', { Id: Id }).execute();
    }
};
exports.GameService = GameService;
exports.GameService = GameService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(game_entity_1.Game)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GameService);
//# sourceMappingURL=games.service.js.map