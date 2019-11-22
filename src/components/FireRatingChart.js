import React from "react"

function FireRatingChart() {
      const theRatings = ["Low-Moderate", "High", "Very High", "Severe", "Extreme", "Catastrophic"];

      let randomiser = theRatings[Math.floor(Math.random() * theRatings.length)];

      const ratingsList = {
        "Low-Moderate": [-75],
        "High": [-45],
        "Very High": [-15],
        "Severe": [15],
        "Extreme": [45],
        "Catastrophic": [75]
      }

      let arrowDegree = "";
      let todaysWarning = "";

      function todaysRating(rating) {
        for (let key in ratingsList) {
          if (key === rating) {
            todaysWarning = rating;
            arrowDegree = ratingsList[key][0];
          }
        }
      }

      todaysRating(randomiser);

      return(
        <div>
          <h1>Today's Fire Danger Rating: {todaysWarning}</h1>
          <div className="parent">
            <img src={require("../media/firechart.png")} alt="fire ratings chart" className="fireChart" height="220px"/>
            <img src={require("../media/airrow.png")} alt="Fire Rating Arrow" height="120px" className="chartArrow" style={{transform:`rotate(${arrowDegree}deg)`}}/>
          </div>
        </div>
      )
    }

export default FireRatingChart
