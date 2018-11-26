import React from "react";

class Meetup extends React.Component {
  render() {
    const listItems = this.props.meetupResults.map(obj => 
      <li key={obj.id}>
        <p className="center"><a href={obj.link}>{obj.name}</a></p>
        <p>Hosted by: {obj.host}</p>
        <p>Created on: {obj.creation_date}</p>
      </li>);

    return (
      <ul>
        {listItems }
      </ul>
    );
  }
}

export default Meetup;
