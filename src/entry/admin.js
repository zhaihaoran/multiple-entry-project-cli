import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { routeAdmin } from '@route/index.js';

class App extends React.Component {
    render() {
        return (
            <Router children={routeAdmin} />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
