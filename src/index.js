import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute,browserHistory} from 'react-router';
import Header from './components/Header';
import './index.css';

ReactDOM.render(
  <Header/>,
  document.getElementById('root')
);
