import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { UserAccount } from './userAccount.entity'; // Import the UserAccount entity if it's in a separate file.
import { BillingDetailsGame } from './billingDetailsGame.entity';

@Entity('billing')
export class Billing {
  @PrimaryGeneratedColumn()
  billingId: number;

  @Column({ type: 'char', length: 10 })
  userId: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  timePurchase: Date;

  @Column('int')
  totalCost: number;

  @ManyToOne(() => UserAccount, (userAccount) => userAccount.userId)
  @JoinColumn({ name: 'userId' })
  userAccount: UserAccount;
}
