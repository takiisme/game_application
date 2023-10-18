"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentGameModule = void 0;
const common_1 = require("@nestjs/common");
const commentGame_controller_1 = require("./commentGame.controller");
const commentGame_service_1 = require("./commentGame.service");
let CommentGameModule = class CommentGameModule {
};
exports.CommentGameModule = CommentGameModule;
exports.CommentGameModule = CommentGameModule = __decorate([
    (0, common_1.Module)({
        controllers: [commentGame_controller_1.CommentGameController],
        providers: [commentGame_service_1.CommentGameService],
    })
], CommentGameModule);
//# sourceMappingURL=commentGame.module.js.map