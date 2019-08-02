import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Main from './components/main.js';
import * as serviceWorker from './serviceWorker';

//this exercise are copied in https://blackrockdigital.github.io/startbootstrap-heroic-features/#
//but codeed for Me/
ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
