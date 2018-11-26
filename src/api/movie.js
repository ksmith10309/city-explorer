import React from "react";

class Movie extends React.Component {
  render() {
    const listItems = this.props.movieResults.map(obj => 
      <li key={obj.id}>
        <p><span>{obj.title}</span> was release on {obj.released_on}. Out of {obj.total_votes} total votes, {obj.title} has an average vote of {obj.average_votes} and a popularity score of {obj.popularity}.</p>
        <img src={obj.image_url} alt={obj.title}></img>
        <p>{obj.overview}</p>
      </li>);

    return (
      <ul>
        {listItems }
      </ul>
    );
  }
}

export default Movie;
