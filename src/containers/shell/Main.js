import { Route } from 'react-router'
import Navbar from './Navbar'
import Dashboard from '../../components/dashboard/Dashboard'
import Artworks from '../../components/artworks/Artworks'

export default function Main() {
  return (
    <div>
        <nav>
          <Navbar />
        </nav>
      
      <div className="py-10">

          <Route path="/dashboard" component={Dashboard} />
          <Route path="/artworks" component={Artworks} />     
      </div>
    </div>
  )
}
