// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ImageS3Info, Image, Medium, Artwork, Artist, Collection, ModelArtistConnection, ModelArtworkConnection, ModelMediumConnection, ModelCollectionConnection } = initSchema(schema);

export {
  ImageS3Info,
  Image,
  Medium,
  Artwork,
  Artist,
  Collection,
  ModelArtistConnection,
  ModelArtworkConnection,
  ModelMediumConnection,
  ModelCollectionConnection
};