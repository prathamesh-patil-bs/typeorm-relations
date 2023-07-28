import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  DeepPartial,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PhotoMetaData } from './photo-metadata.entity';

@Entity()
export class Photo {
  constructor(entityLikeObj: DeepPartial<Photo>) {
    return Object.assign(this, entityLikeObj);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ name: 'file_name' })
  fileName: string;

  @Column()
  views: number;

  @Column({ name: 'is_published', type: 'bool' })
  isPublished: boolean;

  @OneToOne(() => PhotoMetaData, (photoMetaData) => photoMetaData.photo)
  @JoinColumn({ name: 'photo_metadata_id' })
  photoMetaData: PhotoMetaData;
}
