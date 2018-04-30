import React from "react";
import timeConverter from "./timeConverter";
import timestamp from "./timestamp";

class WeatherPiece extends React.Component {
  render() {
    console.log(this.props.weatherData);
    return this.props.weatherData ? (
      <div>
        <h2>{this.props.weatherData.name}</h2>
        <img
          src={`http://openweathermap.org/img/w/${
            this.props.weatherData.weather[0].icon
          }.png`}
          alt="weather pic"
        />
        <p>Current Temperature: {this.props.weatherData.main.temp} &#8451;</p>
        <p>
          High: {this.props.weatherData.main.temp_max} Low:{" "}
          {this.props.weatherData.main.temp_min}
        </p>
        <p>
          Sunrise: {timeConverter(this.props.weatherData.sys.sunrise)} Sunset:{" "}
          {timeConverter(this.props.weatherData.sys.sunset)}
        </p>
        <p>{this.props.weatherData.weather[0].description}</p>
        <p>Humidity: {this.props.weatherData.main.humidity}%</p>
        <p>Generated: {timestamp(this.props.weatherData.dt)}</p>
      </div>
    ) : (
      <div>loading..</div>
    );
  }
}

export default WeatherPiece;
