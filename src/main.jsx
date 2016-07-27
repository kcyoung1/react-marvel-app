import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect} from 'react-router';

import Home from './components/home.jsx';

require('./styles/reset.scss');
require('./styles/main.scss');

class App extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
       <Redirect from='/' to='/home'/>
       <Route path='/home' component={Home}/>
     </Router>
   );

 } // render end
} // App end

ReactDOM.render(<App/>, document.getElementById('react-app'));
