import SearchItem from "../SearchItem/SearchItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function SearchList() {
  const resultList = useSelector((store) => store.searchResultList);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("component did mount");

    dispatch({
      type: "FETCH_GIFS",
    });
  }, []);
  return (
    <>
      <h2>SearchList</h2>
      <ul>
        {resultList.map((gif) => (
          <li key={gif.id}>NAME: {gif.name}</li>
        ))}
      </ul>
      <SearchItem />
    </>
  );
}

export default SearchList;
