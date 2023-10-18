"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const game_entity_1 = require("./entities/game.entity");
const games_service_1 = require("./modules/game/games.service");
const games_controller_1 = require("./modules/game/games.controller");
const developer_entity_1 = require("./entities/developer.entity");
const developer_service_1 = require("./modules/developer/developer.service");
const developer_controller_1 = require("./modules/developer/developer.controller");
const billing_entity_1 = require("./entities/billing.entity");
const billing_service_1 = require("./modules/billing/billing.service");
const billing_controller_1 = require("./modules/billing/billing.controller");
const billingDetailsGame_entity_1 = require("./entities/billingDetailsGame.entity");
const billingDetailsGame_service_1 = require("./modules/billingDetailsGame/billingDetailsGame.service");
const billingDetailsGame_controller_1 = require("./modules/billingDetailsGame/billingDetailsGame.controller");
const billingDetailsDlc_entity_1 = require("./entities/billingDetailsDlc.entity");
const billingDetailsDlc_service_1 = require("./modules/billingDetailsDlc/billingDetailsDlc.service");
const billingDetailsDlc_controller_1 = require("./modules/billingDetailsDlc/billingDetailsDlc.controller");
const comment_entity_1 = require("./entities/comment.entity");
const comment_service_1 = require("./modules/comment/comment.service");
const comment_controller_1 = require("./modules/comment/comment.controller");
const commentGame_entity_1 = require("./entities/commentGame.entity");
const commentGame_service_1 = require("./modules/commentGame/commentGame.service");
const commentGame_controller_1 = require("./modules/commentGame/commentGame.controller");
const commentDlc_entity_1 = require("./entities/commentDlc.entity");
const commentDlc_service_1 = require("./modules/commentDlc/commentDlc.service");
const commentDlc_controller_1 = require("./modules/commentDlc/commentDlc.controller");
const dlc_entity_1 = require("./entities/dlc.entity");
const dlc_service_1 = require("./modules/dlc/dlc.service");
const dlc_controller_1 = require("./modules/dlc/dlc.controller");
const dlcRating_entity_1 = require("./entities/dlcRating.entity");
const dlcRating_service_1 = require("./modules/dlcRating/dlcRating.service");
const dlcRating_controller_1 = require("./modules/dlcRating/dlcRating.controller");
const gameGenres_entity_1 = require("./entities/gameGenres.entity");
const gameGenres_service_1 = require("./modules/gameGenres/gameGenres.service");
const gameGenres_controller_1 = require("./modules/gameGenres/gameGenres.controller");
const gameRating_entity_1 = require("./entities/gameRating.entity");
const gameRating_service_1 = require("./modules/gameRating/gameRating.service");
const gameRating_controller_1 = require("./modules/gameRating/gameRating.controller");
const gameSysReq_entity_1 = require("./entities/gameSysReq.entity");
const gameSysReq_service_1 = require("./modules/gameSysReq/gameSysReq.service");
const gameSysReq_controller_1 = require("./modules/gameSysReq/gameSysReq.controller");
const genre_entity_1 = require("./entities/genre.entity");
const genre_service_1 = require("./modules/genre/genre.service");
const genre_controller_1 = require("./modules/genre/genre.controller");
const paymentInfo_entity_1 = require("./entities/paymentInfo.entity");
const paymentInfo_service_1 = require("./modules/paymentInfo/paymentInfo.service");
const paymentInfo_controller_1 = require("./modules/paymentInfo/paymentInfo.controller");
const saleDetailsDlc_entity_1 = require("./entities/saleDetailsDlc.entity");
const saleDetailsDlc_service_1 = require("./modules/saleDetailsDlc/saleDetailsDlc.service");
const saleDetailsDlc_controller_1 = require("./modules/saleDetailsDlc/saleDetailsDlc.controller");
const saleDetailsGame_entity_1 = require("./entities/saleDetailsGame.entity");
const saleDetailsGame_service_1 = require("./modules/saleDetailsGame/saleDetailsGame.service");
const saleDetailsGame_controller_1 = require("./modules/saleDetailsGame/saleDetailsGame.controller");
const salePeriod_entity_1 = require("./entities/salePeriod.entity");
const salePeriod_service_1 = require("./modules/salePeriod/salePeriod.service");
const salePeriod_controller_1 = require("./modules/salePeriod/salePeriod.controller");
const salePromotion_entity_1 = require("./entities/salePromotion.entity");
const salePromotion_service_1 = require("./modules/salePromotion/salePromotion.service");
const salePromotion_controller_1 = require("./modules/salePromotion/salePromotion.controller");
const userAccount_entity_1 = require("./entities/userAccount.entity");
const userAccount_service_1 = require("./modules/userAccount/userAccount.service");
const userAccount_controller_1 = require("./modules/userAccount/userAccount.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '18.234.115.160',
                port: 3306,
                username: 'backend_dev',
                password: 'backend_dev_password',
                database: 'sda_assignment',
                entities: [
                    game_entity_1.Game,
                    developer_entity_1.Developer,
                    billing_entity_1.Billing,
                    billingDetailsDlc_entity_1.BillingDetailsDlc,
                    billingDetailsGame_entity_1.BillingDetailsGame,
                    comment_entity_1.Comment,
                    commentDlc_entity_1.CommentDlc,
                    commentGame_entity_1.CommentGame,
                    dlc_entity_1.Dlc,
                    dlcRating_entity_1.DlcRating,
                    gameGenres_entity_1.GameGenre,
                    gameRating_entity_1.GameRating,
                    gameSysReq_entity_1.GameSysReq,
                    genre_entity_1.Genre,
                    paymentInfo_entity_1.PaymentInfo,
                    saleDetailsDlc_entity_1.SaleDetailsDlc,
                    saleDetailsGame_entity_1.SaleDetailsGame,
                    salePeriod_entity_1.SalePeriod,
                    salePromotion_entity_1.SalePromotion,
                    userAccount_entity_1.UserAccount,
                ],
                synchronize: false,
            }),
            typeorm_1.TypeOrmModule.forFeature([
                game_entity_1.Game,
                developer_entity_1.Developer,
                billing_entity_1.Billing,
                billingDetailsDlc_entity_1.BillingDetailsDlc,
                billingDetailsGame_entity_1.BillingDetailsGame,
                comment_entity_1.Comment,
                commentDlc_entity_1.CommentDlc,
                commentGame_entity_1.CommentGame,
                dlc_entity_1.Dlc,
                dlcRating_entity_1.DlcRating,
                gameGenres_entity_1.GameGenre,
                gameRating_entity_1.GameRating,
                gameSysReq_entity_1.GameSysReq,
                genre_entity_1.Genre,
                paymentInfo_entity_1.PaymentInfo,
                saleDetailsDlc_entity_1.SaleDetailsDlc,
                saleDetailsGame_entity_1.SaleDetailsGame,
                salePeriod_entity_1.SalePeriod,
                salePromotion_entity_1.SalePromotion,
                userAccount_entity_1.UserAccount,
            ])
        ],
        controllers: [
            app_controller_1.AppController,
            games_controller_1.GameController,
            developer_controller_1.DeveloperController,
            billing_controller_1.BillingController,
            billingDetailsDlc_controller_1.BillingDetailsDlcController,
            billingDetailsGame_controller_1.BillingDetailsGameController,
            comment_controller_1.CommentController,
            commentDlc_controller_1.CommentDlcController,
            commentGame_controller_1.CommentGameController,
            dlc_controller_1.DlcController,
            dlcRating_controller_1.DlcRatingController,
            gameGenres_controller_1.GameGenreController,
            gameRating_controller_1.GameRatingController,
            gameSysReq_controller_1.GameSysReqController,
            genre_controller_1.GenreController,
            paymentInfo_controller_1.PaymentInfoController,
            saleDetailsDlc_controller_1.SaleDetailsDlcController,
            saleDetailsGame_controller_1.SaleDetailsGameController,
            salePeriod_controller_1.SalePeriodController,
            salePromotion_controller_1.SalePromotionController,
            userAccount_controller_1.UserAccountController,
        ],
        providers: [
            app_service_1.AppService,
            games_service_1.GameService,
            developer_service_1.DeveloperService,
            billing_service_1.BillingService,
            billingDetailsDlc_service_1.BillingDetailsDlcService,
            billingDetailsGame_service_1.BillingDetailsGameService,
            comment_service_1.CommentService,
            commentDlc_service_1.CommentDlcService,
            commentGame_service_1.CommentGameService,
            dlc_service_1.DlcService,
            dlcRating_service_1.DlcRatingService,
            gameGenres_service_1.GameGenreService,
            gameRating_service_1.GameRatingService,
            gameSysReq_service_1.GameSysReqService,
            genre_service_1.GenreService,
            paymentInfo_service_1.PaymentInfoService,
            saleDetailsDlc_service_1.SaleDetailsDlcService,
            saleDetailsGame_service_1.SaleDetailsGameService,
            salePeriod_service_1.SalePeriodService,
            salePromotion_service_1.SalePromotionService,
            userAccount_service_1.UserAccountService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map