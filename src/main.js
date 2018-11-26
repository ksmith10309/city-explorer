import React from "react";

import superagent from 'superagent';

import Map from './map.js';
import Weather from './api/weather.js';
import Yelp from './api/yelp.js';
import Meetup from './api/meetup.js';
import Movie from './api/movie.js';
import Trail from './api/trail.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      formatted_query: "",
      latitute: "",
      longitude: "",
      weatherResults: [],
      yelpResults: [],
      meetupResults: [],
      movieResults: [],
      trailResults: []
    };
  }

  locationChange = e => {
    this.setState({ location: e.target.value });
  }

  onExplore = e => {
    e.preventDefault();
    superagent('get', 'https://city-explorer-backend.herokuapp.com/location?data=' + this.state.location)
      .then(results => {
        this.setState({ formatted_query: results.body.formatted_query, latitude: results.body.latitude, longitude: results.body.longitude });
        let queryString = Object.entries(results.body).map(([key, val]) => encodeURIComponent('data[' + key + ']') + '=' + encodeURIComponent(val)).join('&');
        superagent('get', 'https://city-explorer-backend.herokuapp.com/weather?' + queryString)
          .then(weatherResults => {
            this.setState({ weatherResults: weatherResults.body })
          })
        superagent('get', 'https://city-explorer-backend.herokuapp.com/yelp?' + queryString)
          .then(yelpResults => {
            this.setState({ yelpResults: yelpResults.body })
          })
        superagent('get', 'https://city-explorer-backend.herokuapp.com/meetups?' + queryString)
          .then(meetupResults => {
            this.setState({ meetupResults: meetupResults.body })
          })
        superagent('get', 'https://city-explorer-backend.herokuapp.com/movies?' + queryString)
          .then(movieResults => {
            this.setState({ movieResults: movieResults.body })
          })
        superagent('get', 'https://city-explorer-backend.herokuapp.com/trails?' + queryString)
          .then(trailResults => {
            this.setState({ trailResults: trailResults.body })
          })
      })
      .catch(console.error);
  }

  render() {
    if (this.state.formatted_query === "") {
      return (
        <main>
          <form onSubmit={ this.onExplore }>
            <label>Search for a location</label>
            <input type="text" name="search" placeholder="Enter a location here" onChange={this.locationChange} />
            <button type="submit">Explore!</button>
          </form>
        </main>
      );
    } else {
      return (
        <main>
          <form onSubmit={ this.onExplore }>
            <label>Search for a location</label>
            <input type="text" name="search" placeholder="Enter a location here" onChange={this.locationChange} />
            <button type="submit">Explore!</button>
          </form>
          <Map latitude={this.state.latitude} longitude={this.state.longitude} />
          <h2>Here are the results for {this.state.formatted_query}</h2>
          <div>
            <section>
              <h3>Results from the Dark Sky API</h3>
              <Weather weatherResults={this.state.weatherResults} />
            </section>
            <section>
              <h3>Results from the Yelp API</h3>
              <Yelp yelpResults={this.state.yelpResults} />
            </section>
            <section>
              <h3>Results from the Meetup API</h3>
              <Meetup meetupResults={this.state.meetupResults} />
            </section>
            <section>
              <h3>Results from the Movie DB API</h3>
              <Movie movieResults={this.state.movieResults} />
            </section>
            <section>
              <h3>Results from the Hiking Project API</h3>
              <Trail trailResults={this.state.trailResults} />
            </section>
          </div>
        </main>
      );
    }
  }
}

export default Main;
