import React, {Component} from 'react'
import './App.css'
import FireChart from './components/FireRatingChart'
import Weather from './components/Weather'

class App extends Component {


  render(){
    return(
      <div>
        < FireChart />
        <br />
        < Weather />
      </div>
    )
  }
}

export default App
