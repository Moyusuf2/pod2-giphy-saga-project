import { useDispatch, useSelector } from 'react-redux';

function FavoriteItem({ element }) {

    const dispatch = useDispatch();

    const categoryName = {
        '1': 'Funny',
        '2': 'Cohort',
        '3': 'Cartoon',
        '4': 'NSFW',
        '5': 'Meme',
        'null': 'None'
    }

    return (
        <div className="favoriteItem">
            <img src={element.url} />
            {/* obj[something] === obj.something */}
            <div>Favorite Category: {categoryName[element.categoyry_id]}</div>
            <div>Favorite ID: {element.id}</div>
            <button onClick={() => dispatch(
                {
                    type: 'UPDATE_CATEGORY',
                    payload: {
                        id: element.id,
                        data: 1
                    }
                })}>Funny</button>
            <button onClick={() => dispatch(
                {
                    type: 'UPDATE_CATEGORY',
                    payload: {
                        id: element.id,
                        data: 2
                    }
                })}>Cohort</button>
            <button onClick={() => dispatch(
                {
                    type: 'UPDATE_CATEGORY',
                    payload: {
                        id: element.id,
                        data: 3
                    }
                })}>Cartoon</button>
            <button onClick={() => dispatch(
                {
                    type: 'UPDATE_CATEGORY',
                    payload: {
                        id: element.id,
                        data: 4
                    }
                })}>NSFW</button>
            <button onClick={() => dispatch(
                {
                    type: 'UPDATE_CATEGORY',
                    payload: {
                        id: element.id,
                        data: 5
                    }
                })}>Meme</button>
            <button onClick={() => dispatch(
                {
                    type: 'UPDATE_CATEGORY',
                    payload: {
                        id: element.id,
                        data: null
                    }
                })}>None</button>
        </div>
    );
}

export default FavoriteItem;