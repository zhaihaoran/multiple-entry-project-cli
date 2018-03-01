import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import Layout from '@comp/Layout.jsx';

import Home from '@view/Home.jsx';
import Calendar from '@view/Calendar.jsx';
import Form from '@view/Form.jsx';

import '@scss/admin_common.scss';

const App = () => (
    <Router>
        <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={Calendar} />
            <Route path="/topics" component={Form} />
        </Layout>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
