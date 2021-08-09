import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import Navbar from './containers/shell/Navbar';
import Main from './containers/shell/Main';

function App() {
  return (
    <main>
      <Main />
    </main>
  
  )
}

export default withAuthenticator(App)
