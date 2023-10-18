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
exports.SaleDetailsGame = void 0;
const typeorm_1 = require("typeorm");
const game_entity_1 = require("./game.entity");
const salePeriod_entity_1 = require("./salePeriod.entity");
const salePromotion_entity_1 = require("./salePromotion.entity");
let SaleDetailsGame = class SaleDetailsGame {
};
exports.SaleDetailsGame = SaleDetailsGame;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], SaleDetailsGame.prototype, "periodId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'char', length: 10 }),
    __metadata("design:type", String)
], SaleDetailsGame.prototype, "gameId", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], SaleDetailsGame.prototype, "discountRate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => game_entity_1.Game, (game) => game.gameId),
    (0, typeorm_1.JoinColumn)({ name: 'gameId' }),
    __metadata("design:type", game_entity_1.Game)
], SaleDetailsGame.prototype, "game", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => salePeriod_entity_1.SalePeriod, (salePeriod) => salePeriod.periodId),
    (0, typeorm_1.JoinColumn)({ name: 'periodId' }),
    __metadata("design:type", salePeriod_entity_1.SalePeriod)
], SaleDetailsGame.prototype, "salePeriod", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => salePromotion_entity_1.SalePromotion, (salePromotion) => salePromotion.saleId),
    (0, typeorm_1.JoinColumn)({ name: 'saleId' }),
    __metadata("design:type", salePromotion_entity_1.SalePromotion)
], SaleDetailsGame.prototype, "salePromotion", void 0);
exports.SaleDetailsGame = SaleDetailsGame = __decorate([
    (0, typeorm_1.Entity)('sale_details_game')
], SaleDetailsGame);
//# sourceMappingURL=saleDetailsGame.entity.js.map