import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserAccount } from './userAccount.entity'; // Import the UserAccount entity if it's in a separate file.

@Entity('payment_info')
export class PaymentInfo {
  @PrimaryColumn({ type: 'char', length: 10 })
  userId: string;

  @PrimaryColumn({ type: 'varchar', length: 30 })
  accountNumber: string;

  @Column({ type: 'varchar', length: 20 })
  paymentType: string;

  @Column('date')
  expiryDate: Date;

  @ManyToOne(() => UserAccount, (userAccount) => userAccount.userId)
  @JoinColumn({ name: 'userId' })
  userAccount: UserAccount;
}
