// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Medium, Artist, Artwork, Collection } = initSchema(schema);

export {
  Medium,
  Artist,
  Artwork,
  Collection
};