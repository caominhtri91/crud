import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'product' })
@Index(['name'])
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 128 })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 128 })
  category: string;

  @Column({ nullable: false, type: 'decimal', precision: 11, scale: 2 })
  price: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: string;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: string;
}
