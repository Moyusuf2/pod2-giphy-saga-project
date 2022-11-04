import SearchItem from "../SearchItem/SearchItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function SearchList() {
  const resultList = useSelector( store => store.searchResultList);

  console.log('resultList is:',resultList);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Getting GIF from API");

    dispatch({
      type: "FETCH_GIFS",
    });
  }, []);
  return (
    <>
      <h2>SearchList</h2>
    
        {resultList.length > 0 ? 
        <h4>{resultList.map((image) => (
            <img src={image.url} alt="image of GIF" />
        ))}</h4> 
        : 
        <h4>'No GIF found'</h4>}
      
      <SearchItem />
    </>
  );
}

export default SearchList;
