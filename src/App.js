import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Reducer } from './Reducers/Reducers';
import FetchComponent from './Components/FetchComponent';

const store = createStore(Reducer, applyMiddleware(thunk))


function App() {
    return(
        <Provider store={store}>
            <FetchComponent />
        </Provider>
    );
}

export default App;
