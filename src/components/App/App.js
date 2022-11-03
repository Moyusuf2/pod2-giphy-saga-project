import React from 'react';
import SearchForm from '../SeachForm/SearchForm';
import SearchList from '../SearchList/SearchList';
import SearchItem from '../SearchItem/SearchItem';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchForm />
      <SearchList />
      <SearchItem />
      

    </div>
  );
}

export default App;
