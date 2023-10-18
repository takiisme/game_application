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
exports.GameController = void 0;
const common_1 = require("@nestjs/common");
const game_entity_1 = require("../../entities/game.entity");
const games_service_1 = require("./games.service");
let GameController = class GameController {
    constructor(gameService) {
        this.gameService = gameService;
    }
    async AddGame(gameInfo) {
        return this.gameService.AddGame(gameInfo);
    }
    async GetAllGames() {
        return this.gameService.GetAllGames();
    }
    async GetGameById(Id) {
        return this.gameService.GetGameById(Id);
    }
    async UpdateGame(gameInfo) {
        return this.gameService.UpdateGame(gameInfo);
    }
    async DeleteGameById(Id) {
        return this.gameService.RemoveGame(Id);
    }
};
exports.GameController = GameController;
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [game_entity_1.Game]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "AddGame", null);
__decorate([
    (0, common_1.Get)('getall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GameController.prototype, "GetAllGames", null);
__decorate([
    (0, common_1.Get)('get/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "GetGameById", null);
__decorate([
    (0, common_1.Put)('update/:Id'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [game_entity_1.Game]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "UpdateGame", null);
__decorate([
    (0, common_1.Delete)('delete/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "DeleteGameById", null);
exports.GameController = GameController = __decorate([
    (0, common_1.Controller)('game'),
    __metadata("design:paramtypes", [games_service_1.GameService])
], GameController);
//# sourceMappingURL=games.controller.js.map