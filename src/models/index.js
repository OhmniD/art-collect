// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Medium, Artwork, Artist, Collection, ModelArtistConnection, ModelArtworkConnection, ModelMediumConnection, ModelCollectionConnection } = initSchema(schema);

export {
  Medium,
  Artwork,
  Artist,
  Collection,
  ModelArtistConnection,
  ModelArtworkConnection,
  ModelMediumConnection,
  ModelCollectionConnection
};