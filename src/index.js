import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Main from './content'
// import 'bootstrap/dist/css/bootstrap.css';

import registerServiceWorker from './registerServiceWorker';
console.log('loading')
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
