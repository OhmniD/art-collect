/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMedium = /* GraphQL */ `
  query GetMedium($id: ID!) {
    getMedium(id: $id) {
      id
      medium
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
export const syncMediums = /* GraphQL */ `
  query SyncMediums(
    $filter: ModelMediumFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMediums(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        medium
        _version
        _deleted
        _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
export const syncArtists = /* GraphQL */ `
  query SyncArtists(
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncArtists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        artistStartYear
        artistEndYear
        _version
        _deleted
        _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
export const syncArtworks = /* GraphQL */ `
  query SyncArtworks(
    $filter: ModelArtworkFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncArtworks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        collectionID
        title
        creationDate
        dimensions
        mediumID
        artistID
        _version
        _deleted
        _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
      startedAt
    }
  }
`;
export const syncCollections = /* GraphQL */ `
  query SyncCollections(
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCollections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
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
      startedAt
    }
  }
`;
