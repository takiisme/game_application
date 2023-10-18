import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Game } from './game.entity'; // Import the Game entity if it's in a separate file.
import { SalePeriod } from './salePeriod.entity'; // Import the SalePeriod entity if it's in a separate file.
import { SalePromotion } from './salePromotion.entity'; // Import the SalePromotion entity if it's in a separate file.


@Entity('sale_details_game')
export class SaleDetailsGame {
  @PrimaryColumn()
  periodId: number;

  @PrimaryColumn({ type: 'char', length: 10 })
  gameId: string;

  @Column('int')
  discountRate: number;

  @ManyToOne(() => Game, (game) => game.gameId)
  @JoinColumn({ name: 'gameId' })
  game: Game;

  @ManyToOne(() => SalePeriod, (salePeriod) => salePeriod.periodId)
  @JoinColumn({ name: 'periodId' })
  salePeriod: SalePeriod;

  @ManyToOne(() => SalePromotion, (salePromotion) => salePromotion.saleId)
  @JoinColumn({ name: 'saleId'})
  salePromotion: SalePromotion;
}
