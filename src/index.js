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

/// Reducers
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
    };
};

const categoryList = (state = [], action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return action.payload;
        default:
           return state; 
    }; 
};

function* fetchGIFS(action) {

    console.log('in fetchGIFS');

    let response = yield axios.get(`/api/giphy/${action.payload}`);
    console.log(response);

    TODO: //handle the data that comes back, ie what do we want
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



function* fetchCategory(action){

    console.log('Inside fetchCategory function inside Index', {params: 'funny'});
    ///// UNSURE IF THIS⬇️ ROUTE IS CORRECT
    // {params: {category: }}
    let response = yield axios.get(`/api/category/${action.payload.data}`);
    console.log('inside index', response.data);
    yield put({
        type: 'SET_CATEGORY',
        payload: response.data
    });
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