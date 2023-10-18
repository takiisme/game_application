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
exports.GameGenre = void 0;
const typeorm_1 = require("typeorm");
const game_entity_1 = require("./game.entity");
const genre_entity_1 = require("./genre.entity");
let GameGenre = class GameGenre {
};
exports.GameGenre = GameGenre;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'char', length: 10 }),
    __metadata("design:type", String)
], GameGenre.prototype, "gameId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], GameGenre.prototype, "genreId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => game_entity_1.Game, (game) => game.gameId),
    (0, typeorm_1.JoinColumn)({ name: 'gameId' }),
    __metadata("design:type", game_entity_1.Game)
], GameGenre.prototype, "game", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => genre_entity_1.Genre, (genre) => genre.games),
    (0, typeorm_1.JoinColumn)({ name: 'genreId' }),
    __metadata("design:type", genre_entity_1.Genre)
], GameGenre.prototype, "genre", void 0);
exports.GameGenre = GameGenre = __decorate([
    (0, typeorm_1.Entity)('game_genres')
], GameGenre);
//# sourceMappingURL=gameGenres.entity.js.map