import { DataSource, Repository } from 'typeorm';
import { Photo } from '../entities/photo.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PhotoRepository extends Repository<Photo> {
  constructor(private readonly dataSource: DataSource) {
    super(Photo, dataSource.createEntityManager());
  }
}
