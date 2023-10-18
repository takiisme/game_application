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
exports.Game = void 0;
const typeorm_1 = require("typeorm");
const developer_entity_1 = require("./developer.entity");
let Game = class Game {
};
exports.Game = Game;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'char', length: 10 }),
    __metadata("design:type", String)
], Game.prototype, "gameId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Game.prototype, "gameName", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Game.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], Game.prototype, "releaseDate", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], Game.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 8 }),
    __metadata("design:type", String)
], Game.prototype, "devId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => developer_entity_1.Developer, (developer) => developer.games),
    (0, typeorm_1.JoinColumn)({ name: 'devId' }),
    __metadata("design:type", developer_entity_1.Developer)
], Game.prototype, "developer", void 0);
exports.Game = Game = __decorate([
    (0, typeorm_1.Entity)('game')
], Game);
//# sourceMappingURL=game.entity.js.map