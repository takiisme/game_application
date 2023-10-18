import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn} from 'typeorm';
import { Billing } from './billing.entity'; // Import the Billing entity if it's in a separate file.
import { Game } from './game.entity'; // Import the Game entity if it's in a separate file.

@Entity('billing_details_game')
export class BillingDetailsGame {
  @PrimaryGeneratedColumn()
  billingId: string;

  @PrimaryColumn({ type: 'char', length: 10 })
  gameId: string;

  @Column('int')
  priceWithDiscount: number;

  @Column({ type: 'char', length: 10 })
  serialKey: string;

  @ManyToOne(() => Billing, (billing) => billing.billingId)
  @JoinColumn({ name: 'billingId' })
  billing: Billing;

  @ManyToOne(() => Game, (game) => game.gameId)
  @JoinColumn({ name: 'gameId' })
  game: Game;
}
