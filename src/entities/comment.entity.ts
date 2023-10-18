import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserAccount } from './userAccount.entity'; // Import the UserAccount entity if it's in a separate file.

@Entity('comment')
export class Comment {
  @PrimaryGeneratedColumn()
  commentId: number;

  @Column('text')
  content: string;

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  cmtDateTime: Date;

  @Column({ type: 'char', length: 10 })
  userId: string;

  @ManyToOne(() => UserAccount, (userAccount) => userAccount.userId)
  @JoinColumn({ name: 'userId' })
  userAccount: UserAccount;
}
