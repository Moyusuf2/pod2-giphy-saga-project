import SearchList from "../SearchList/SearchList";
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

function SearchForm(){
    const dispatch = useDispatch();
    const [search,setSearch] = useState('');

    
    const handleSubmit = () =>{
        console.log('in HandleSubmit');
        dispatch({
            type: 'FETCH_GIFS',
            payload: search
        })
        setSearch('')
    }
    const handleSearch = event =>{
        console.log('in HandleSubmit');
        
        setSearch(event.target.value)
    }
    return(
        <>
        <input type="text" value={search} placeholder="Search Giphy" onChange={handleSearch} />
       <button onClick={handleSubmit}>Submit</button>
        <SearchList />
        </>
    )
}

export default SearchForm;