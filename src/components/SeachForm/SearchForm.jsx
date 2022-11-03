import SearchList from "../SearchList/SearchList";

function SearchForm(){

    const handleSubmit = () =>{
        console.log('in HandleSubmit')
    }
    return(
        <>
        <input type="text" placeholder="Search Giphy"/>
        <button onClick={handleSubmit}>Submit</button>
        <SearchList />
        </>
    )
}

export default SearchForm;