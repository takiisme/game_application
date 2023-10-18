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
exports.SaleDetailsDlc = void 0;
const typeorm_1 = require("typeorm");
const dlc_entity_1 = require("./dlc.entity");
const salePeriod_entity_1 = require("./salePeriod.entity");
const salePromotion_entity_1 = require("./salePromotion.entity");
let SaleDetailsDlc = class SaleDetailsDlc {
};
exports.SaleDetailsDlc = SaleDetailsDlc;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], SaleDetailsDlc.prototype, "periodId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'char', length: 10 }),
    __metadata("design:type", String)
], SaleDetailsDlc.prototype, "dlcId", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], SaleDetailsDlc.prototype, "discountRate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dlc_entity_1.Dlc, (dlc) => dlc.dlcId),
    (0, typeorm_1.JoinColumn)({ name: 'dlcId' }),
    __metadata("design:type", dlc_entity_1.Dlc)
], SaleDetailsDlc.prototype, "dlc", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => salePeriod_entity_1.SalePeriod, (salePeriod) => salePeriod.periodId),
    (0, typeorm_1.JoinColumn)({ name: 'periodId' }),
    __metadata("design:type", salePeriod_entity_1.SalePeriod)
], SaleDetailsDlc.prototype, "salePeriod", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => salePromotion_entity_1.SalePromotion, (salePromotion) => salePromotion.saleId),
    (0, typeorm_1.JoinColumn)({ name: 'saleId' }),
    __metadata("design:type", salePromotion_entity_1.SalePromotion)
], SaleDetailsDlc.prototype, "salePromotion", void 0);
exports.SaleDetailsDlc = SaleDetailsDlc = __decorate([
    (0, typeorm_1.Entity)('sale_details_dlc')
], SaleDetailsDlc);
//# sourceMappingURL=saleDetailsDlc.entity.js.map