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
exports.Genre = void 0;
const typeorm_1 = require("typeorm");
const gameGenres_entity_1 = require("./gameGenres.entity");
let Genre = class Genre {
};
exports.Genre = Genre;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Genre.prototype, "genreId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45 }),
    __metadata("design:type", String)
], Genre.prototype, "genreName", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => gameGenres_entity_1.GameGenre, (gameGenre) => gameGenre.genre),
    __metadata("design:type", Array)
], Genre.prototype, "games", void 0);
exports.Genre = Genre = __decorate([
    (0, typeorm_1.Entity)('genre')
], Genre);
//# sourceMappingURL=genre.entity.js.map