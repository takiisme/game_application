"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleDetailsGameModule = void 0;
const common_1 = require("@nestjs/common");
const saleDetailsGame_controller_1 = require("./saleDetailsGame.controller");
const saleDetailsGame_service_1 = require("./saleDetailsGame.service");
let SaleDetailsGameModule = class SaleDetailsGameModule {
};
exports.SaleDetailsGameModule = SaleDetailsGameModule;
exports.SaleDetailsGameModule = SaleDetailsGameModule = __decorate([
    (0, common_1.Module)({
        controllers: [saleDetailsGame_controller_1.SaleDetailsGameController],
        providers: [saleDetailsGame_service_1.SaleDetailsGameService]
    })
], SaleDetailsGameModule);
//# sourceMappingURL=saleDetailsGame.module.js.map