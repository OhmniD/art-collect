import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
<h1>Hello World!</h1>
  )
}

export default withAuthenticator(App)
