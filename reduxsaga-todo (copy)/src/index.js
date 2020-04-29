import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/app/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import rootReducer from './reducers/reducer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/saga'
import { ThemeProvider } from '@material-ui/styles';
import theme from './commons/themes/theme';
import {
  BrowserRouter as Router
} from "react-router-dom";

const composeEnhancers = composeWithDevTools({});

const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk, sagaMiddleware]

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <ToastContainer/>
          <App />
        </ThemeProvider>
      </Router>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
