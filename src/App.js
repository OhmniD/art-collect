import './App.css';
import { useState, useEffect } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
import { createCollection, createArtist, createArtwork, createMedium, updateArtwork } from './graphql/mutations';
import { listCollections } from './graphql/queries'

import { DataStore } from '@aws-amplify/datastore';
import { Medium, Artwork, Collection, Artist } from './models';

function App() {

  const [collection, setCollection] = useState();

  useEffect(() => {
    (async () => {
      const collection = await getCollection(); 
    if (collection.data.listCollections.items.length === 0) {
      makeCollection();
      setCollection(await getCollection);
    } else {
      setCollection(collection.data.listCollections.items[0].id)
    }
    })()

  }, [])

  const getCollection = async () => {
    const owner = await Auth.currentAuthenticatedUser()

    const filter = {owner: {eq: owner}}
    const collections = await API.graphql(graphqlOperation(listCollections), {variables: {filter: filter}});
    
    return collections
  }

  const makeCollection = async () => {
    await API.graphql(graphqlOperation(createCollection, {input: {}}));
  }

  




  const handleClick = async () => {
    // await Auth.currentAuthenticatedUser().then((user) => {
    //   console.log(user.username);
    // });
    // await API.graphql(graphqlOperation(createCollection, {input: {}}));

    const medium1 = {medium: "Pen on paper, Gold leaf"};
    const artist1 = {name: "Becki Hiscocks", artistStartYear: 1998}

    const medium = await DataStore.save(
      new Medium(medium1)
  );

  const artist = await DataStore.save(
    new Artist(artist1)
  )

    // const medium = await API.graphql(graphqlOperation(createMedium, {input: medium1}))
    // const artist =  await API.graphql(graphqlOperation(createArtist, {input: artist1}))
    // console.log(artist.data.createArtist)
    // await console.log(medium.id)
    const artwork1 = {title: "Dred God", collectionID: collection, mediumID: medium.id, artistID: artist.id}
    // const artwork = await API.graphql(graphqlOperation(createArtwork, artwork1))
    await DataStore.save(
      new Artwork(artwork1)
    )

    // await API.graphql(graphqlOperation(updateArtwork, {input: {title: "Cock, Muff, bumhole"}}))

}

  return (
    <div>
      <h1>Hello World!</h1>
      {/* <p>{username}</p> */}

  
      <button onClick={handleClick}>Create Stuff</button>
    </div>
  )
}

export default withAuthenticator(App)
