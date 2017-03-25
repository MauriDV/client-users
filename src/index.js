import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute,browserHistory} from 'react-router';
import Header from '../components/Header';
import App from './App';
import './index.css';

ReactDOM.render(
  <Header/>,
  document.getElementById('root')
);
