import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App/App.js';
// import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Reducers
const favoriteList = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITES':
            return action.payload;
        default:
            return state;
    }
};

const searchResultList = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESULTS':
            return action.payload;
        default:
            return state;
    }
};

const categoryList = (state = [], action) => {
    console.log('inside categoryList function');
    switch (action.type) {
        case 'SET_CATEGORY':
            return action.payload;
    }
    return state;
}



function* fetchGIFS() {
    console.log('in fetchGIFS');

    let response = yield axios.get('/api/favorite');
    console.log(response);
    yield put({
        type: 'SET_RESULTS',
        payload: response.data
    })
};

function* createFavorite(action) {
    console.log('in createFavorite');
};

function* fetchFavorites() {
    console.log('in fetchFavorites');
    let response = yield axios.get('/api/favorite');
    console.log('response from database', response.data);
    yield put({
        type: 'SET_FAVORITES',
        payload: response.data
    })
};

/// GET results based on category chosen
function* fetchCategory() {
    console.log('Inside fetchCategory inside Index');
    ///// UNSURE IF THIS⬇️ ROUTE IS CORRECT
    let response = yield axios.get('/api/favorite/category');
    console.log(response);
    yield put({
        type: 'SET_CATEGORY',
        payload: response.data
    })
}



// Create the rootSaga generator function
function* watcherSaga() {
    yield takeEvery('FETCH_GIFS', fetchGIFS);
    yield takeEvery('CREATE_FAVORITE', createFavorite);

    yield takeEvery('FETCH_CATEGORY', fetchCategory);
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        favoriteList,
        searchResultList,
        categoryList
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass watcerSaga into our sagaMiddleware
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));