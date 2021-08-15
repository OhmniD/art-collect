// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Image, Medium, Artwork, Artist, Collection, ImageS3Info, ModelArtistConnection, ModelArtworkConnection, ModelMediumConnection, ModelCollectionConnection } = initSchema(schema);

export {
  Image,
  Medium,
  Artwork,
  Artist,
  Collection,
  ImageS3Info,
  ModelArtistConnection,
  ModelArtworkConnection,
  ModelMediumConnection,
  ModelCollectionConnection
};