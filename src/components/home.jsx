import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect} from 'react-router';

import Comic from './comic';
import apikey from '../key'; // replace the variable with your api key

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comics : [],
    };
  }

// To get the data using an AJAX request from the Marvel API
  componentWillMount() {
    this._fetchData();
    // fetch('http://gateway.marvel.com/v1/public/comics?apikey=' + apikey)
    // .then((response) => {
    //   console.log(response);
    //   this.setState({ comics: response.data.results });
    // })
  }

  _fetchData()  {
    $.ajax({
      method: 'GET',
      url:
      'http://gateway.marvel.com/v1/public/comics?apikey=' + apikey,
      success: response => {
        console.log(response.data.results);
        this.setState({ comics: response.data.results });
      }
    });
  }

  render() {
    const { comics } = this.state;
    console.log(this.state.comics);
    return (
      <div>
          <div className="page_header">
              <div className="logo"></div>
          </div>
          <div className="comic-wrapper">
            <div className="comic-images">
              {
                comics && comics.length
                ? comics.map((comic, index) => (
                <Comic
                  key={index}
                  comic={comic}
                />))
               : <p className="btn">Loading...</p>
          }
            </div>
          </div>
      </div>
    );
  } // render end
} // Home end
