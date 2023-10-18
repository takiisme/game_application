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
exports.Dlc = void 0;
const typeorm_1 = require("typeorm");
const developer_entity_1 = require("./developer.entity");
const game_entity_1 = require("./game.entity");
let Dlc = class Dlc {
};
exports.Dlc = Dlc;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'char', length: 10 }),
    __metadata("design:type", String)
], Dlc.prototype, "dlcId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45 }),
    __metadata("design:type", String)
], Dlc.prototype, "dlcName", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Dlc.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], Dlc.prototype, "releaseDate", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Dlc.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 8 }),
    __metadata("design:type", String)
], Dlc.prototype, "devId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 10 }),
    __metadata("design:type", String)
], Dlc.prototype, "gameId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => developer_entity_1.Developer, (developer) => developer.devId),
    (0, typeorm_1.JoinColumn)({ name: 'devId' }),
    __metadata("design:type", developer_entity_1.Developer)
], Dlc.prototype, "developer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => game_entity_1.Game, (game) => game.gameId),
    (0, typeorm_1.JoinColumn)({ name: 'gameId' }),
    __metadata("design:type", game_entity_1.Game)
], Dlc.prototype, "game", void 0);
exports.Dlc = Dlc = __decorate([
    (0, typeorm_1.Entity)('dlc')
], Dlc);
//# sourceMappingURL=dlc.entity.js.map