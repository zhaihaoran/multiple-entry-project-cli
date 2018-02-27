import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import routes from '@route/index.js';
import reducers from '@reducer/index.js';

const store = createStore(reducers);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router children={routes} />
            </Provider>
        );
    }
}

export default App;
