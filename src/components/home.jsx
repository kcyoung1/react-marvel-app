import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect} from 'react-router';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comics : [],
    }
  }

  componentWillMount() {
    this._fetchData();
  }

  _fetchData()  {
    $.ajax({
      method: 'GET',
      url:
      'http://gateway.marvel.com/v1/public/comics?apikey=c1a92559e851c361fc7f540560163ef8',
      success: response => {
        this.setState({ comics: response.data.results });
      }
    });
  }

  render() {
    const { comics } = this.state;
    return (
      <div>
          <div className="page_header">
              <h1 className="page_title">Marvel</h1>
          </div>
          <div className="comic-wrapper">
            <div className="comic-images">
              { comics.map((comic, index) => (
                  <div key={index} className="comic-image">
                    <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.description} />
                  </div>
              ))}
            </div>
          </div>
      </div>
    )
  }
}
