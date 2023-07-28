import {
  Entity,
  Column,
  OneToOne,
  DeepPartial,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Photo } from './photo.entity';

@Entity()
export class PhotoMetaData {
  constructor(entityLikeObj: DeepPartial<PhotoMetaData>) {
    return Object.assign(this, entityLikeObj);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  height: number;

  @Column()
  width: number;

  @Column()
  compressed: boolean;

  @Column()
  comment: string;

  @Column({ type: 'varchar', enum: ['portrait', 'landscape'] })
  orientation: 'portrait' | 'landscape';

  @OneToOne(() => Photo, (photo) => photo.photoMetaData)
  photo: Photo;
}
