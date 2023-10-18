import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('sale_promotion')
export class SalePromotion {
  @PrimaryGeneratedColumn()
  saleId: number;

  @Column({ type: 'varchar', length: 45 })
  saleName: string;
}
