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
exports.CommentDlc = void 0;
const typeorm_1 = require("typeorm");
const comment_entity_1 = require("./comment.entity");
const dlc_entity_1 = require("./dlc.entity");
let CommentDlc = class CommentDlc {
};
exports.CommentDlc = CommentDlc;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], CommentDlc.prototype, "commentId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'char', length: 10 }),
    __metadata("design:type", String)
], CommentDlc.prototype, "dlcId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => comment_entity_1.Comment, (comment) => comment.commentId),
    (0, typeorm_1.JoinColumn)({ name: 'commentId' }),
    __metadata("design:type", comment_entity_1.Comment)
], CommentDlc.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dlc_entity_1.Dlc, (dlc) => dlc.dlcId),
    (0, typeorm_1.JoinColumn)({ name: 'dlcId' }),
    __metadata("design:type", dlc_entity_1.Dlc)
], CommentDlc.prototype, "dlc", void 0);
exports.CommentDlc = CommentDlc = __decorate([
    (0, typeorm_1.Entity)('comment_dlc')
], CommentDlc);
//# sourceMappingURL=commentDlc.entity.js.map