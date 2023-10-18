import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SalePromotion } from './salePromotion.entity'; // Import the SalePromotion entity if it's in a separate file.

@Entity('sale_period')
export class SalePeriod {
  @PrimaryGeneratedColumn()
  periodId: number;

  @Column('date')
  startDate: Date;

  @Column('date')
  endDate: Date;

  @Column({ type: 'int' })
  saleId: number;

  @ManyToOne(() => SalePromotion, (salePromotion) => salePromotion.saleId)
  @JoinColumn({ name: 'saleId' })
  salePromotion: SalePromotion;
}
