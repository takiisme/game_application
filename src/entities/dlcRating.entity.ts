import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Dlc } from './dlc.entity'; // Import the Dlc entity if it's in a separate file.
import { UserAccount } from './userAccount.entity'; // Import the UserAccount entity if it's in a separate file.

@Entity('dlc_rating')
export class DlcRating {
  @PrimaryColumn({ type: 'char', length: 10 })
  userId: string;

  @PrimaryColumn({ type: 'char', length: 10 })
  dlcId: string;

  @Column('date')
  ratingDate: Date;

  @Column('int')
  ratingStar: number;

  @ManyToOne(() => Dlc, (dlc) => dlc.dlcId)
  @JoinColumn({ name: 'dlcId' })
  dlc: Dlc;

  @ManyToOne(() => UserAccount, (userAccount) => userAccount.userId)
  @JoinColumn({ name: 'userId' })
  userAccount: UserAccount;
}
