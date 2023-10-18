"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentInfoModule = void 0;
const common_1 = require("@nestjs/common");
const paymentInfo_controller_1 = require("./paymentInfo.controller");
const paymentInfo_service_1 = require("./paymentInfo.service");
let paymentInfoModule = class paymentInfoModule {
};
exports.paymentInfoModule = paymentInfoModule;
exports.paymentInfoModule = paymentInfoModule = __decorate([
    (0, common_1.Module)({
        controllers: [paymentInfo_controller_1.PaymentInfoController],
        providers: [paymentInfo_service_1.PaymentInfoService]
    })
], paymentInfoModule);
//# sourceMappingURL=paymentInfo.module.js.map