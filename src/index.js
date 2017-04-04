import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute,browserHistory} from 'react-router';
import Header from './components/Header';
import Home from './routes/Home';
import './index.css';

ReactDOM.render(
  (
  	<Router history={browserHistory}>
		<Route path="/" component={Header}>
			<IndexRoute component={Home}/>
		</Route>
	</Router>
  ),document.getElementById('root')
);
