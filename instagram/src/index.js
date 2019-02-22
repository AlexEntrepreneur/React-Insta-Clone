import React from 'react';
import ReactDOM from 'react-dom';
import authenticate from './components/Authentication/Authentication';
import App from './App';

const AppAuthentication = authenticate(App, 'ig');

ReactDOM.render(<AppAuthentication />, document.getElementById('root'));
