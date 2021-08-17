/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
      id
      artworkID
      bucket
      fullsize {
        key
        height
        width
      }
      thumbnail {
        key
        height
        width
      }
      isPrimary
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        artworkID
        bucket
        fullsize {
          key
          height
          width
        }
        thumbnail {
          key
          height
          width
        }
        isPrimary
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMedium = /* GraphQL */ `
  query GetMedium($id: ID!) {
    getMedium(id: $id) {
      id
      medium
      createdAt
      updatedAt
      owner
      ArtworksMedium {
        items {
          id
          collectionID
          title
          creationDate
          dimensions
          mediumID
          artistID
          createdAt
          updatedAt
          owner
        }
        nextToken
        scannedCount
        count
      }
    }
  }
`;
export const listMediums = /* GraphQL */ `
  query ListMediums(
    $filter: ModelMediumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMediums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        medium
        createdAt
        updatedAt
        owner
        ArtworksMedium {
          nextToken
          scannedCount
          count
        }
      }
      nextToken
      scannedCount
      count
    }
  }
`;
export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
      id
      name
      artistStartYear
      artistEndYear
      createdAt
      updatedAt
      owner
      ArtworksArtist {
        items {
          id
          collectionID
          title
          creationDate
          dimensions
          mediumID
          artistID
          createdAt
          updatedAt
          owner
        }
        nextToken
        scannedCount
        count
      }
    }
  }
`;
export const listArtists = /* GraphQL */ `
  query ListArtists(
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        artistStartYear
        artistEndYear
        createdAt
        updatedAt
        owner
        ArtworksArtist {
          nextToken
          scannedCount
          count
        }
      }
      nextToken
      scannedCount
      count
    }
  }
`;
export const getArtwork = /* GraphQL */ `
  query GetArtwork($id: ID!) {
    getArtwork(id: $id) {
      id
      collectionID
      title
      creationDate
      dimensions
      mediumID
      artistID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listArtworks = /* GraphQL */ `
  query ListArtworks(
    $filter: ModelArtworkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtworks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        collectionID
        title
        creationDate
        dimensions
        mediumID
        artistID
        createdAt
        updatedAt
        owner
      }
      nextToken
      scannedCount
      count
    }
  }
`;
export const getCollection = /* GraphQL */ `
  query GetCollection($id: ID!) {
    getCollection(id: $id) {
      id
      createdAt
      updatedAt
      ArtworksCollection {
        items {
          id
          collectionID
          title
          creationDate
          dimensions
          mediumID
          artistID
          createdAt
          updatedAt
          owner
        }
        nextToken
        scannedCount
        count
      }
      owner
    }
  }
`;
export const listCollections = /* GraphQL */ `
  query ListCollections(
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        ArtworksCollection {
          nextToken
          scannedCount
          count
        }
        owner
      }
      nextToken
      scannedCount
      count
    }
  }
`;
