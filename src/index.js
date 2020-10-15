import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { initStore } from './redux/store';

const store = initStore();

ReactDOM.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <Router>
                <App />
            </Router>
        </ReduxProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
