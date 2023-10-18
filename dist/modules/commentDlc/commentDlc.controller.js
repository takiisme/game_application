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
exports.CommentDlcController = void 0;
const common_1 = require("@nestjs/common");
const commentDlc_service_1 = require("./commentDlc.service");
let CommentDlcController = class CommentDlcController {
    constructor(commentDlcService) {
        this.commentDlcService = commentDlcService;
    }
    async GetAllCommentDlc() {
        return this.commentDlcService.GetAllCommentDlc();
    }
};
exports.CommentDlcController = CommentDlcController;
__decorate([
    (0, common_1.Get)('getall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommentDlcController.prototype, "GetAllCommentDlc", null);
exports.CommentDlcController = CommentDlcController = __decorate([
    (0, common_1.Controller)('comment_dlc'),
    __metadata("design:paramtypes", [commentDlc_service_1.CommentDlcService])
], CommentDlcController);
//# sourceMappingURL=commentDlc.controller.js.map