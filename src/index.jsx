// libs
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
// tools
import {composeWithDevTools} from "redux-devtools-extension";
//components
import App from './App';
import reducer from './reducers';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const render = () => {
    ReactDom.render(
        <Provider store = {store} >
            <AppContainer>
                <App />
            </AppContainer>
        </Provider>,
        document.getElementById('app')
    )
}

render();

if (module.hot) {
    module.hot.accept('./App', render);
}
