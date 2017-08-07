
import React from 'react';

import { 
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
    browserHistory } from 'react-router-dom';

import FirstPage from './Pages/First/FirstPage.jsx';
import SecondPage from './Pages/Second/SecondPage.jsx';

export default class App extends React.Component{
    render(){
        return (
                <Router history={browserHistory}>
                    <div id="page">
                        <div>
                            <ul>
                                <li><Link to="/first">First</Link></li>
                                <li><Link to="/second">Second</Link></li>
                            </ul>
                        </div>
                        
                        <div id="content">
                            <Route exact path='/' component={FirstPage} />
                            <Route exact path='/first' component={FirstPage} />
                            <Route exact path='/second' component={SecondPage} />
                        </div>
                    </div>
                </Router>
        );
    }
}