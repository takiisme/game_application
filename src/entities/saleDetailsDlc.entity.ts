import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Dlc } from './dlc.entity'; // Import the Dlc entity if it's in a separate file.
import { SalePeriod } from './salePeriod.entity'; // Import the SalePeriod entity if it's in a separate file.
import { SalePromotion } from './salePromotion.entity';

@Entity('sale_details_dlc')
export class SaleDetailsDlc {
  @PrimaryColumn()
  periodId: number;

  @PrimaryColumn({ type: 'char', length: 10 })
  dlcId: string;

  @Column('int')
  discountRate: number;

  @ManyToOne(() => Dlc, (dlc) => dlc.dlcId)
  @JoinColumn({ name: 'dlcId' })
  dlc: Dlc;

  @ManyToOne(() => SalePeriod, (salePeriod) => salePeriod.periodId)
  @JoinColumn({ name: 'periodId' })
  salePeriod: SalePeriod;

  @ManyToOne(() => SalePromotion, (salePromotion) => salePromotion.saleId)
  @JoinColumn({ name: 'saleId' })
  salePromotion: SalePromotion;
}
