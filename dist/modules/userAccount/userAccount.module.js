"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccountModule = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const userAccount_controller_1 = require("./userAccount.controller");
const userAccount_service_1 = require("./userAccount.service");
let UserAccountModule = class UserAccountModule {
};
exports.UserAccountModule = UserAccountModule;
exports.UserAccountModule = UserAccountModule = __decorate([
    (0, decorators_1.Module)({
        controllers: [userAccount_controller_1.UserAccountController],
        providers: [userAccount_service_1.UserAccountService],
    })
], UserAccountModule);
//# sourceMappingURL=userAccount.module.js.map