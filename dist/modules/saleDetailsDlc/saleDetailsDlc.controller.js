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
exports.SaleDetailsDlcController = void 0;
const common_1 = require("@nestjs/common");
const saleDetailsDlc_service_1 = require("./saleDetailsDlc.service");
let SaleDetailsDlcController = class SaleDetailsDlcController {
    constructor(saleDetailsDlcService) {
        this.saleDetailsDlcService = saleDetailsDlcService;
    }
    async GetAllSaleDetailsDls() {
        return this.saleDetailsDlcService.GetAllSaleDetailsDlc();
    }
};
exports.SaleDetailsDlcController = SaleDetailsDlcController;
__decorate([
    (0, common_1.Get)('getall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SaleDetailsDlcController.prototype, "GetAllSaleDetailsDls", null);
exports.SaleDetailsDlcController = SaleDetailsDlcController = __decorate([
    (0, common_1.Controller)('sale_details_dlc'),
    __metadata("design:paramtypes", [saleDetailsDlc_service_1.SaleDetailsDlcService])
], SaleDetailsDlcController);
//# sourceMappingURL=saleDetailsDlc.controller.js.map