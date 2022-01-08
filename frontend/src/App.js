import './styles/App.css'
import { Route } from 'react-router-dom'
import Locations from './components/Locations'
import Places from './components/Places'
import Reviews from './components/Reviews'

function App() {
  return (
    <div className="App">
      <h4>Travello</h4>
      <div className="flex-row">
        <div className="left">
     

        </div>
        <div className="right">
          <Route path="/" exact component={Locations} />
          <Route path="/locations/:id" component={Places} />
            {/* <Route path="/places/:id" component={Reviews} /> */}
       
        </div>
      </div>
    </div>
  )
}

export default App
