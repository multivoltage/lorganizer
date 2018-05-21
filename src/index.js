import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import firebaseConfig from './database'

import 'normalize.css';

ReactDOM.render(<App />, document.getElementById('root'));

/* Service Worker temporary commented because not necessary 
instead you need specific functionality like Offline or Push Notifications */
// registerServiceWorker();
