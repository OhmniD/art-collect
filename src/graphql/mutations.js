/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMedium = /* GraphQL */ `
  mutation CreateMedium(
    $input: CreateMediumInput!
    $condition: ModelMediumConditionInput
  ) {
    createMedium(input: $input, condition: $condition) {
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
        startedAt
      }
    }
  }
`;
export const updateMedium = /* GraphQL */ `
  mutation UpdateMedium(
    $input: UpdateMediumInput!
    $condition: ModelMediumConditionInput
  ) {
    updateMedium(input: $input, condition: $condition) {
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
        startedAt
      }
    }
  }
`;
export const deleteMedium = /* GraphQL */ `
  mutation DeleteMedium(
    $input: DeleteMediumInput!
    $condition: ModelMediumConditionInput
  ) {
    deleteMedium(input: $input, condition: $condition) {
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
        startedAt
      }
    }
  }
`;
export const createArtist = /* GraphQL */ `
  mutation CreateArtist(
    $input: CreateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    createArtist(input: $input, condition: $condition) {
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
        startedAt
      }
    }
  }
`;
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
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
        startedAt
      }
    }
  }
`;
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
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
        startedAt
      }
    }
  }
`;
export const createArtwork = /* GraphQL */ `
  mutation CreateArtwork(
    $input: CreateArtworkInput!
    $condition: ModelArtworkConditionInput
  ) {
    createArtwork(input: $input, condition: $condition) {
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
export const updateArtwork = /* GraphQL */ `
  mutation UpdateArtwork(
    $input: UpdateArtworkInput!
    $condition: ModelArtworkConditionInput
  ) {
    updateArtwork(input: $input, condition: $condition) {
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
export const deleteArtwork = /* GraphQL */ `
  mutation DeleteArtwork(
    $input: DeleteArtworkInput!
    $condition: ModelArtworkConditionInput
  ) {
    deleteArtwork(input: $input, condition: $condition) {
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
export const createCollection = /* GraphQL */ `
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
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
        startedAt
      }
      owner
    }
  }
`;
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
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
        startedAt
      }
      owner
    }
  }
`;
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
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
        startedAt
      }
      owner
    }
  }
`;
