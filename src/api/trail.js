import React from "react";

class Trail extends React.Component {
  render() {
    const listItems = this.props.trailResults.map(obj => 
      <li key={obj.id}>
        <p>Hike Name: <a href={obj.trail_url}>{obj.name}</a></p>
        <p>Location: {obj.location}</p>
        <p>Distance: {obj.length} miles</p>
        <p>On {obj.condition_date} at {obj.condition_time}- Trail conditions were reported as {obj.conditions}</p>
        <p>This trail has a rating of {obj.stars} stars (out of {obj.star_votes} votes)</p>
        <p>{obj.summary}</p>
      </li>);

    return (
      <ul>
        {listItems }
      </ul>
    );
  }
}

export default Trail;
