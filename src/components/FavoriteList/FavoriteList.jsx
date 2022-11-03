import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';

function FavoriteList() {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log('component did mount');
    //     dispatch({
    //         type: 'FETCH_ELEMENTS'
    //     });
    // }, []);

    return (
        <>
            <h1>FavoriteList</h1>
        </>
    );
}

export default FavoriteList