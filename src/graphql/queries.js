/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getImageS3Info = /* GraphQL */ `
  query GetImageS3Info($id: ID!) {
    getImageS3Info(id: $id) {
      id
      key
      height
      width
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listImageS3Infos = /* GraphQL */ `
  query ListImageS3Infos(
    $filter: ModelImageS3InfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImageS3Infos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        key
        height
        width
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncImageS3Infos = /* GraphQL */ `
  query SyncImageS3Infos(
    $filter: ModelImageS3InfoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncImageS3Infos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        key
        height
        width
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
      id
      artworkID
      bucket
      isPrimary
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      fullsize {
        id
        key
        height
        width
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      thumbnail {
        id
        key
        height
        width
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
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
        isPrimary
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        fullsize {
          id
          key
          height
          width
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        thumbnail {
          id
          key
          height
          width
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncImages = /* GraphQL */ `
  query SyncImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncImages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        artworkID
        bucket
        isPrimary
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        fullsize {
          id
          key
          height
          width
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        thumbnail {
          id
          key
          height
          width
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
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
      scannedCount
      count
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
      scannedCount
      count
    }
  }
`;
