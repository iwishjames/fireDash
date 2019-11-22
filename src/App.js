import React, {Component} from 'react';
import './App.css';

class App extends Component {


  render(){
    const ratingsList = {
      "Low-Moderate": ["Red", -75],
      "High": ["Blue", -45],
      "Very High": ["Yellow", -15],
      "Severe": ["Orange", 15],
      "Extreme": ["Red", 45],
      "Catastrophic": ["Black", 75]
    }

    let arrowDegree = "";

    let todaysWarning = "";

    function todaysRating(rating) {
      for (let key in ratingsList) {
        if (key === rating) {
          todaysWarning = rating;
          arrowDegree = ratingsList[key][1];
        }
      }
    }

    todaysRating("High");

    return(
      <div>
        <h1>Today's Fire Danger Rating: {todaysWarning}</h1>
        <div className="parent">
          <img src={require("./media/firechart.png")} alt="fire ratings chart" className="fireChart" height="220px"/>
          <img src={require("./media/airrow.png")} alt="Fire Rating Arrow" height="120px" className="chartArrow" style={{transform:`rotate(${arrowDegree}deg)`}}/>
        </div>
      </div>
    )
  }
}

export default App
