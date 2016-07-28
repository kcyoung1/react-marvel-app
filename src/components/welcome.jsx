import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect} from 'react-router';

import Home from './home.jsx';

export default class Welcome extends React.Component {


  render() {
    return (
      <div className="welcome-container">
        <div className="logo"></div>
        <button className="btn">Enter</button>
      </div>
    )
  } // render end
} // Welcome end
