/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
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
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
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
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
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
export const createMedium = /* GraphQL */ `
  mutation CreateMedium(
    $input: CreateMediumInput!
    $condition: ModelMediumConditionInput
  ) {
    createMedium(input: $input, condition: $condition) {
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
export const updateMedium = /* GraphQL */ `
  mutation UpdateMedium(
    $input: UpdateMediumInput!
    $condition: ModelMediumConditionInput
  ) {
    updateMedium(input: $input, condition: $condition) {
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
export const deleteMedium = /* GraphQL */ `
  mutation DeleteMedium(
    $input: DeleteMediumInput!
    $condition: ModelMediumConditionInput
  ) {
    deleteMedium(input: $input, condition: $condition) {
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
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
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
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
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
