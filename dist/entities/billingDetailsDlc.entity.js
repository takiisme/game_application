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
exports.BillingDetailsDlc = void 0;
const typeorm_1 = require("typeorm");
const billing_entity_1 = require("./billing.entity");
const dlc_entity_1 = require("./dlc.entity");
let BillingDetailsDlc = class BillingDetailsDlc {
};
exports.BillingDetailsDlc = BillingDetailsDlc;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", String)
], BillingDetailsDlc.prototype, "billingId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'char', length: 10 }),
    __metadata("design:type", String)
], BillingDetailsDlc.prototype, "dlcId", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], BillingDetailsDlc.prototype, "priceWithDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 20 }),
    __metadata("design:type", String)
], BillingDetailsDlc.prototype, "serialKey", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => billing_entity_1.Billing, (billing) => billing.billingId),
    (0, typeorm_1.JoinColumn)({ name: 'billingId' }),
    __metadata("design:type", billing_entity_1.Billing)
], BillingDetailsDlc.prototype, "billing", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dlc_entity_1.Dlc, (dlc) => dlc.dlcId),
    (0, typeorm_1.JoinColumn)({ name: 'dlcId' }),
    __metadata("design:type", dlc_entity_1.Dlc)
], BillingDetailsDlc.prototype, "dlc", void 0);
exports.BillingDetailsDlc = BillingDetailsDlc = __decorate([
    (0, typeorm_1.Entity)('billing_details_dlc')
], BillingDetailsDlc);
//# sourceMappingURL=billingDetailsDlc.entity.js.map