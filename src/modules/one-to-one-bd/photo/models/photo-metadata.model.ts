import { ObjectType } from '@nestjs/graphql';

export class PhotoMetaDataModel {
  id: number;

  height: number;

  width: number;

  compressed: boolean;

  comment: string;

  orientation: 'portrait' | 'landscape';

//   photo: Photo;
}