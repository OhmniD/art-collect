import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MediumMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ArtistMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ArtworkMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CollectionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Medium {
  readonly id: string;
  readonly medium?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Medium, MediumMetaData>);
  static copyOf(source: Medium, mutator: (draft: MutableModel<Medium, MediumMetaData>) => MutableModel<Medium, MediumMetaData> | void): Medium;
}

export declare class Artist {
  readonly id: string;
  readonly nam: string;
  readonly artistStartYear: string;
  readonly artistEndYear?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Artist, ArtistMetaData>);
  static copyOf(source: Artist, mutator: (draft: MutableModel<Artist, ArtistMetaData>) => MutableModel<Artist, ArtistMetaData> | void): Artist;
}

export declare class Artwork {
  readonly id: string;
  readonly Artist?: Artist;
  readonly collectionID?: string;
  readonly title: string;
  readonly Medium?: Medium;
  readonly creationDate?: string;
  readonly dimensions?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Artwork, ArtworkMetaData>);
  static copyOf(source: Artwork, mutator: (draft: MutableModel<Artwork, ArtworkMetaData>) => MutableModel<Artwork, ArtworkMetaData> | void): Artwork;
}

export declare class Collection {
  readonly id: string;
  readonly Artworks?: (Artwork | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Collection, CollectionMetaData>);
  static copyOf(source: Collection, mutator: (draft: MutableModel<Collection, CollectionMetaData>) => MutableModel<Collection, CollectionMetaData> | void): Collection;
}