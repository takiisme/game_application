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
exports.SalePeriod = void 0;
const typeorm_1 = require("typeorm");
const salePromotion_entity_1 = require("./salePromotion.entity");
let SalePeriod = class SalePeriod {
};
exports.SalePeriod = SalePeriod;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SalePeriod.prototype, "periodId", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], SalePeriod.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], SalePeriod.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], SalePeriod.prototype, "saleId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => salePromotion_entity_1.SalePromotion, (salePromotion) => salePromotion.saleId),
    (0, typeorm_1.JoinColumn)({ name: 'saleId' }),
    __metadata("design:type", salePromotion_entity_1.SalePromotion)
], SalePeriod.prototype, "salePromotion", void 0);
exports.SalePeriod = SalePeriod = __decorate([
    (0, typeorm_1.Entity)('sale_period')
], SalePeriod);
//# sourceMappingURL=salePeriod.entity.js.map