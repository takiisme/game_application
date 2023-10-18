import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Billing } from './billing.entity'; // Import the Billing entity if it's in a separate file.
import { Dlc } from './dlc.entity'; // Import the Dlc entity if it's in a separate file.

@Entity('billing_details_dlc')
export class BillingDetailsDlc {
  @PrimaryGeneratedColumn({ type: 'int'})
  billingId: string;

  @PrimaryColumn({ type: 'char', length: 10 })
  dlcId: string;

  @Column('int')
  priceWithDiscount: number;

  @Column({ type: 'char', length: 20 })
  serialKey: string;

  @ManyToOne(() => Billing, (billing) => billing.billingId)
  @JoinColumn({ name: 'billingId' })
  billing: Billing;

  @ManyToOne(() => Dlc, (dlc) => dlc.dlcId)
  @JoinColumn({ name: 'dlcId' })
  dlc: Dlc;
}
