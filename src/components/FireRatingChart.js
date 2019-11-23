import React, {Component} from "react";

class FireRatingChart extends Component {
    constructor() {
      super()
      this.state = {
        loading: false,
        fireDanger : ""
      }
    }

    componentDidMount() {
      var xml2js = require('xml2js');
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      var targetUrl = 'http://www.rfs.nsw.gov.au/feeds/fdrToban.xml';

      this.setState({loading: true})
      fetch(proxyUrl + targetUrl)
        .then(response => response.text())
        .then(data => xml2js.parseStringPromise(data))
        .then(result => {
            this.setState({
              loading: false,
              fireDanger : result.FireDangerMap.District[3].DangerLevelToday[0]
            })
          })
    }

    render(){

      const ratingsList = {
        "LOW MODERATE": [-75, "#17a462"],
        "HIGH": [-45, "#00adef"],
        "VERY HIGH": [-15, "#ffd600"],
        "SEVERE": [15, "#fd9e1d"],
        "EXTREME": [45, "#e5281b"],
        "CATASTROPHIC": [75, "#e5281b"]
      }

      let arrowDegree = "";
      let warningColor = "";
      let todaysWarning = "";

      function todaysRating(rating) {
        for (let key in ratingsList) {
          if (key === rating) {
            todaysWarning = rating;
            arrowDegree = ratingsList[key][0];
            warningColor = ratingsList[key][1];
          }
        }
      }

      todaysRating(this.state.fireDanger);

      const text = this.state.loading ? "loading..." : <span style={{color:`${warningColor}`}}>{todaysWarning}</span>;
      const animation = this.state.loading ? <img src={require("../media/airrow.png")} alt="Fire Rating Arrow" height="120px" className="chartArrow" style={{transform:`rotate(${arrowDegree}deg)`}}/> : <img src={require("../media/airrow.png")} alt="Fire Rating Arrow" height="120px" className="chartArrow" style={{transform:`rotate(${arrowDegree}deg)`, animation: `arrowMovement 2s`}}/>;

      return(
        <div>
          <h1>Today's Fire Danger Rating For Campbelltown: {text}</h1>
          <div className="parent">
            <img src={require("../media/firechart.png")} alt="fire ratings chart" className="fireChart" height="220px"/>
            {animation}
          </div>
        </div>
      )
      }
    }

export default FireRatingChart
