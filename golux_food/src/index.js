import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App/App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom"

import '../src/App/App.css';


ReactDOM.render(
<HashRouter>
<App />
</HashRouter>
, document.getElementById('root'));
serviceWorker.unregister();