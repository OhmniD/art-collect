/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateImageS3Info = /* GraphQL */ `
  subscription OnCreateImageS3Info($owner: String) {
    onCreateImageS3Info(owner: $owner) {
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
export const onUpdateImageS3Info = /* GraphQL */ `
  subscription OnUpdateImageS3Info($owner: String) {
    onUpdateImageS3Info(owner: $owner) {
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
export const onDeleteImageS3Info = /* GraphQL */ `
  subscription OnDeleteImageS3Info($owner: String) {
    onDeleteImageS3Info(owner: $owner) {
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
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage($owner: String) {
    onCreateImage(owner: $owner) {
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
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage($owner: String) {
    onUpdateImage(owner: $owner) {
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
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage($owner: String) {
    onDeleteImage(owner: $owner) {
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
export const onCreateMedium = /* GraphQL */ `
  subscription OnCreateMedium($owner: String) {
    onCreateMedium(owner: $owner) {
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
export const onUpdateMedium = /* GraphQL */ `
  subscription OnUpdateMedium($owner: String) {
    onUpdateMedium(owner: $owner) {
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
export const onDeleteMedium = /* GraphQL */ `
  subscription OnDeleteMedium($owner: String) {
    onDeleteMedium(owner: $owner) {
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
export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist($owner: String) {
    onCreateArtist(owner: $owner) {
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
export const onUpdateArtist = /* GraphQL */ `
  subscription OnUpdateArtist($owner: String) {
    onUpdateArtist(owner: $owner) {
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
export const onDeleteArtist = /* GraphQL */ `
  subscription OnDeleteArtist($owner: String) {
    onDeleteArtist(owner: $owner) {
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
export const onCreateArtwork = /* GraphQL */ `
  subscription OnCreateArtwork($owner: String) {
    onCreateArtwork(owner: $owner) {
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
export const onUpdateArtwork = /* GraphQL */ `
  subscription OnUpdateArtwork($owner: String) {
    onUpdateArtwork(owner: $owner) {
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
export const onDeleteArtwork = /* GraphQL */ `
  subscription OnDeleteArtwork($owner: String) {
    onDeleteArtwork(owner: $owner) {
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
export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection($owner: String) {
    onCreateCollection(owner: $owner) {
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
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection($owner: String) {
    onUpdateCollection(owner: $owner) {
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
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection($owner: String) {
    onDeleteCollection(owner: $owner) {
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
