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
}


// GET category list
function* fetchCategory() {

    console.log('Inside fetchCategory inside Index');
}

function* updateCategory(action) {
    console.log('in updateCategory');
    console.log('in updateCategory action.payload.id', action.payload.id); // {item: id}
    console.log('in updateCategory action.payload.data', action.payload.data);
    // corresponds to button press 1 = funny, 2 = cohort, 3 = cartoon, etc...

    yield axios.put(`/api/favorite/${action.payload.id}`, { data: action.payload.data }); // ???

    yield put({
        type: 'FETCH_FAVORITES'
    });


    // const updateCategory = (id) => { // ???
    //     axios({
    //         method: 'PUT',
    //         url: `/api/favorite/${id}`,
    //         data: action.payload.data
    //     })
    //         .then(response => {
    //             console.log('UPDATE response from server', response.data); // Ok
    //         })
    //         .catch(err => {
    //             console.log('UPDATE err from server', err);
    //         })
    // }
}



// Create the rootSaga generator function
function* watcherSaga() {
    yield takeEvery('FETCH_GIFS', fetchGIFS);
    yield takeEvery('CREATE_FAVORITE', createFavorite);
    yield takeEvery('FETCH_CATEGORY', fetchCategory);
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
    yield takeEvery('UPDATE_CATEGORY', updateCategory);

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        favoriteList,
        searchResultList
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass watcerSaga into our sagaMiddleware
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));