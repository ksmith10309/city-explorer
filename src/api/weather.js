import React from "react";

class Weather extends React.Component {
  render() {
    const listItems = this.props.weatherResults.map(obj => 
      <li key={obj.id}>
        <p>The forecast for {obj.time} is: {obj.forecast}</p>
      </li>);

    return (
      <ul>
        {listItems }
      </ul>
    );
  }
}

export default Weather;
