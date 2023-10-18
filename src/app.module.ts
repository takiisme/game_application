import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Game } from './entities/game.entity';
import { GameService } from './modules/game/games.service';
import { GameController } from './modules/game/games.controller';

import { Developer } from './entities/developer.entity';
import { DeveloperService } from './modules/developer/developer.service';
import { DeveloperController } from './modules/developer/developer.controller';

import { Billing } from './entities/billing.entity';
import { BillingService } from './modules/billing/billing.service';
import { BillingController } from './modules/billing/billing.controller';

import { BillingDetailsGame } from './entities/billingDetailsGame.entity';
import { BillingDetailsGameService } from './modules/billingDetailsGame/billingDetailsGame.service';
import { BillingDetailsGameController } from './modules/billingDetailsGame/billingDetailsGame.controller';

import { BillingDetailsDlc } from './entities/billingDetailsDlc.entity';
import { BillingDetailsDlcService } from './modules/billingDetailsDlc/billingDetailsDlc.service';
import { BillingDetailsDlcController } from './modules/billingDetailsDlc/billingDetailsDlc.controller';

import { Comment } from './entities/comment.entity';
import { CommentService } from './modules/comment/comment.service';
import { CommentController } from './modules/comment/comment.controller';

import { CommentGame } from './entities/commentGame.entity';
import { CommentGameService } from './modules/commentGame/commentGame.service';
import { CommentGameController } from './modules/commentGame/commentGame.controller';

import { CommentDlc } from './entities/commentDlc.entity';
import { CommentDlcService } from './modules/commentDlc/commentDlc.service';
import { CommentDlcController } from './modules/commentDlc/commentDlc.controller';

import { Dlc } from './entities/dlc.entity';
import { DlcService } from './modules/dlc/dlc.service';
import { DlcController } from './modules/dlc/dlc.controller';

import { DlcRating } from './entities/dlcRating.entity';
import { DlcRatingService } from './modules/dlcRating/dlcRating.service';
import { DlcRatingController } from './modules/dlcRating/dlcRating.controller';

import { GameGenre } from './entities/gameGenres.entity';
import { GameGenreService } from './modules/gameGenres/gameGenres.service';
import { GameGenreController } from './modules/gameGenres/gameGenres.controller';

import { GameRating } from './entities/gameRating.entity';
import { GameRatingService } from './modules/gameRating/gameRating.service';
import { GameRatingController } from './modules/gameRating/gameRating.controller';

import { GameSysReq } from './entities/gameSysReq.entity';
import { GameSysReqService } from './modules/gameSysReq/gameSysReq.service';
import { GameSysReqController } from './modules/gameSysReq/gameSysReq.controller';

import { Genre } from './entities/genre.entity';
import { GenreService } from './modules/genre/genre.service';
import { GenreController } from './modules/genre/genre.controller';

import { PaymentInfo } from './entities/paymentInfo.entity';
import { PaymentInfoService } from './modules/paymentInfo/paymentInfo.service';
import { PaymentInfoController } from './modules/paymentInfo/paymentInfo.controller';

import { SaleDetailsDlc } from './entities/saleDetailsDlc.entity';
import { SaleDetailsDlcService } from './modules/saleDetailsDlc/saleDetailsDlc.service';
import { SaleDetailsDlcController } from './modules/saleDetailsDlc/saleDetailsDlc.controller';

import { SaleDetailsGame } from './entities/saleDetailsGame.entity';
import { SaleDetailsGameService } from './modules/saleDetailsGame/saleDetailsGame.service';
import { SaleDetailsGameController } from './modules/saleDetailsGame/saleDetailsGame.controller';

import { SalePeriod } from './entities/salePeriod.entity';
import { SalePeriodService } from './modules/salePeriod/salePeriod.service';
import { SalePeriodController } from './modules/salePeriod/salePeriod.controller';

import { SalePromotion } from './entities/salePromotion.entity';
import { SalePromotionService } from './modules/salePromotion/salePromotion.service';
import { SalePromotionController } from './modules/salePromotion/salePromotion.controller';

import { UserAccount } from './entities/userAccount.entity';
import { UserAccountService } from './modules/userAccount/userAccount.service';
import { UserAccountController } from './modules/userAccount/userAccount.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '18.234.115.160',
      port: 3306,
      username: 'backend_dev',
      password: 'backend_dev_password',
      database: 'sda_assignment',
      entities: [
        Game,
        Developer,
        Billing,
        BillingDetailsDlc,
        BillingDetailsGame,
        Comment,
        CommentDlc,
        CommentGame,
        Dlc,
        DlcRating,
        GameGenre,
        GameRating,
        GameSysReq,
        Genre,
        PaymentInfo,
        SaleDetailsDlc,
        SaleDetailsGame,
        SalePeriod,
        SalePromotion,
        UserAccount,
      ],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([
      Game,
      Developer,
      Billing,
      BillingDetailsDlc,
      BillingDetailsGame,
      Comment,
      CommentDlc,
      CommentGame,
      Dlc,
      DlcRating,
      GameGenre,
      GameRating,
      GameSysReq,
      Genre,
      PaymentInfo,
      SaleDetailsDlc,
      SaleDetailsGame,
      SalePeriod,
      SalePromotion,
      UserAccount,
    ])
  ],
  controllers: [
    AppController,
    GameController,
    DeveloperController,
    BillingController,
    BillingDetailsDlcController,
    BillingDetailsGameController,
    CommentController,
    CommentDlcController,
    CommentGameController,
    DlcController,
    DlcRatingController,
    GameGenreController,
    GameRatingController,
    GameSysReqController,
    GenreController,
    PaymentInfoController,
    SaleDetailsDlcController,
    SaleDetailsGameController,
    SalePeriodController,
    SalePromotionController,
    UserAccountController,
  ],
  providers: [
    AppService,
    GameService,
    DeveloperService,
    BillingService,
    BillingDetailsDlcService,
    BillingDetailsGameService,
    CommentService,
    CommentDlcService,
    CommentGameService,
    DlcService,
    DlcRatingService,
    GameGenreService,
    GameRatingService,
    GameSysReqService,
    GenreService,
    PaymentInfoService,
    SaleDetailsDlcService,
    SaleDetailsGameService,
    SalePeriodService,
    SalePromotionService,
    UserAccountService,
  ],
})
export class AppModule { }
