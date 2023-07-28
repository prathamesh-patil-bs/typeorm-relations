import { DataSource, Repository } from 'typeorm';
import { PhotoMetaData } from '../entities/photo-metadata.entity';

export class PhotoMetaDataRepository extends Repository<PhotoMetaData> {
  constructor(private readonly dataSource: DataSource) {
    super(PhotoMetaData, dataSource.createEntityManager());
  }
}
