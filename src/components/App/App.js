import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import CategorySelector from '../CategorySelector/CategorySelector';
import FavoriteList from '../FavoriteList/FavoriteList';
import './App.css';


function App() {
  return (

    <Router>
      <div>
        <h1>Giphy Search!</h1>
      </div>
      <Route path="/" exact>
          <h1>Search View</h1>
        </Route>
        <Route path="/favorites" exact>
          <h1>Favorites View</h1>
          <CategorySelector />
          <FavoriteList />
        </Route>
    </Router>
  );
}

export default App;
