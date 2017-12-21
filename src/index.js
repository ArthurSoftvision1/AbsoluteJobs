import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './App';
import registerServiceWorker from './core/components/RegisterServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
