import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Page from './Page';
import Page1 from './Page.1';
import Page2 from './Page.2';
import NavBar from './nav';


ReactDOM.render(<Router><div><NavBar />
                <Route exact path='/' component={Page} />
                <Route path='/Page1' component={Page1} />
                <Route path='/Page2' component={Page2} /></div></Router>,document.getElementById('root'));
registerServiceWorker();
