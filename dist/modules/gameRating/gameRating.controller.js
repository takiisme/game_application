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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRatingController = void 0;
const common_1 = require("@nestjs/common");
const gameRating_service_1 = require("./gameRating.service");
let GameRatingController = class GameRatingController {
    constructor(gameRatingService) {
        this.gameRatingService = gameRatingService;
    }
    async GetAllGameRatings() {
        return this.gameRatingService.GetAllGameRating();
    }
};
exports.GameRatingController = GameRatingController;
__decorate([
    (0, common_1.Get)('getall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GameRatingController.prototype, "GetAllGameRatings", null);
exports.GameRatingController = GameRatingController = __decorate([
    (0, common_1.Controller)('game_rating'),
    __metadata("design:paramtypes", [gameRating_service_1.GameRatingService])
], GameRatingController);
//# sourceMappingURL=gameRating.controller.js.map