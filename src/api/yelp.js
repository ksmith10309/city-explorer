import React from "react";

class Yelp extends React.Component {
  render() {
    const listItems = this.props.yelpResults.map(obj => 
      <li key={obj.id}>
        <p className="center"><a href={obj.url}>{obj.name}</a></p>
        <p>The average rating is {obj.rating} out of 5 and the average cost is {obj.price} out of 4</p>
        <img src={obj.image_url} alt={obj.name}></img>
        <p></p>
      </li>);

    return (
      <ul>
        {listItems }
      </ul>
    );
  }
}

export default Yelp;
