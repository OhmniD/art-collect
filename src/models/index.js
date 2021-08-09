// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Medium, Artwork, Artist, Collection } = initSchema(schema);

export {
  Medium,
  Artwork,
  Artist,
  Collection
};