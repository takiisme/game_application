import { Entity, PrimaryColumn, Column, Unique, OneToMany } from 'typeorm';
import { Billing } from './billing.entity'; // Import the Billing entity if it's in a separate file.

@Entity('user_account')
@Unique(['username'])
export class UserAccount {
  @PrimaryColumn({ type: 'char', length: 10 })
  userId: string;

  @Column({ type: 'varchar', length: 45 })
  fullName: string;

  @Column({ type: 'varchar', length: 45 })
  email: string;

  @Column({ type: 'varchar', length: 20 })
  username: string;

  @Column('text')
  password: string;

  @OneToMany(() => Billing, (billing) => billing.userAccount)
  billings: Billing[];
}
