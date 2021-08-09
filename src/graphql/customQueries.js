export const getCollectionByOwner = /* GraphQL */ `
  query GetCollection($owner: Owner!) {
    getCollection(owner: $owner) {
      id
      Artworks {
        items {
          id
          collectionID
          title
          creationDate
          dimensions
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;