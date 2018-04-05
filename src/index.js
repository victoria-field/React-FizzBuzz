import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FizzBuzz from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FizzBuzz />, document.getElementById('app'));
registerServiceWorker();
