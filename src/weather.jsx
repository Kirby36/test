import React from "react";
import WeatherPiece from "./weatherPiece";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=Vancouver,CA&APPID=67a630bd5c44526d80dd2d973ba15e33&units=metric"
    )
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ data: data }));
  }

  render() {
    return <WeatherPiece weatherData={this.state.data} />;
  }
}

export default Weather;
