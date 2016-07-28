import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect} from 'react-router';

import Home from './home.jsx';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  _nextPage() {
    browserHistory.push('/home');
  }

  render() {
    return (
      <div className="welcome-container">
        <div className="logo"></div>
        <button
        className="btn"
        onClick={this._nextPage.bind(this)}
        >
          Enter
        </button>
      </div>
    )
  } // render end
} // Welcome end
