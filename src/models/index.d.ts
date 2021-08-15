import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class ImageS3Info {
  readonly key: string;
  readonly height: number;
  readonly width: number;
  constructor(init: ModelInit<ImageS3Info>);
}

export declare class ModelArtistConnection {
  readonly items?: (Artist | null)[];
  readonly nextToken?: string;
  readonly scannedCount?: number;
  readonly count?: number;
  constructor(init: ModelInit<ModelArtistConnection>);
}

export declare class ModelArtworkConnection {
  readonly items?: (Artwork | null)[];
  readonly nextToken?: string;
  readonly scannedCount?: number;
  readonly count?: number;
  constructor(init: ModelInit<ModelArtworkConnection>);
}

export declare class ModelMediumConnection {
  readonly items?: (Medium | null)[];
  readonly nextToken?: string;
  readonly scannedCount?: number;
  readonly count?: number;
  constructor(init: ModelInit<ModelMediumConnection>);
}

export declare class ModelCollectionConnection {
  readonly items?: (Collection | null)[];
  readonly nextToken?: string;
  readonly scannedCount?: number;
  readonly count?: number;
  constructor(init: ModelInit<ModelCollectionConnection>);
}

type ImageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MediumMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ArtworkMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ArtistMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CollectionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Image {
  readonly id: string;
  readonly artworkID: string;
  readonly bucket: string;
  readonly fullsize: ImageS3Info;
  readonly thumbnail: ImageS3Info;
  readonly isPrimary?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Image, ImageMetaData>);
  static copyOf(source: Image, mutator: (draft: MutableModel<Image, ImageMetaData>) => MutableModel<Image, ImageMetaData> | void): Image;
}

export declare class Medium {
  readonly id: string;
  readonly medium?: string;
  readonly ArtworksMedium?: (Artwork | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Medium, MediumMetaData>);
  static copyOf(source: Medium, mutator: (draft: MutableModel<Medium, MediumMetaData>) => MutableModel<Medium, MediumMetaData> | void): Medium;
}

export declare class Artwork {
  readonly id: string;
  readonly collectionID?: string;
  readonly title: string;
  readonly creationDate?: string;
  readonly dimensions?: string;
  readonly mediumID?: string;
  readonly artistID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Artwork, ArtworkMetaData>);
  static copyOf(source: Artwork, mutator: (draft: MutableModel<Artwork, ArtworkMetaData>) => MutableModel<Artwork, ArtworkMetaData> | void): Artwork;
}

export declare class Artist {
  readonly id: string;
  readonly name: string;
  readonly artistStartYear?: number;
  readonly artistEndYear?: number;
  readonly ArtworksArtist?: (Artwork | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Artist, ArtistMetaData>);
  static copyOf(source: Artist, mutator: (draft: MutableModel<Artist, ArtistMetaData>) => MutableModel<Artist, ArtistMetaData> | void): Artist;
}

export declare class Collection {
  readonly id: string;
  readonly ArtworksCollection?: (Artwork | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Collection, CollectionMetaData>);
  static copyOf(source: Collection, mutator: (draft: MutableModel<Collection, CollectionMetaData>) => MutableModel<Collection, CollectionMetaData> | void): Collection;
}