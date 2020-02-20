import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from './js/Navbar'
import Jumbotron from "./js/Jumbotron";

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Jumbotron />, document.getElementById('jumbotron'));

