import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserRole } from '../enums';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 156 })
  name: string;

  @Column('uuid', { generated: 'uuid', unique: true })
  subscription: string;

  @Column('varchar', { length: 20 })
  identity: string;

  @Column('date')
  birthdate: Date;

  @Column('varchar', { length: 20 })
  phone: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.PARTICIPANT,
  })
  role: UserRole;
}
