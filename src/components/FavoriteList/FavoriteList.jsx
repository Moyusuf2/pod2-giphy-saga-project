import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

function FavoriteList() {
    const dispatch = useDispatch();
    const favoriteList = useSelector(store => store.favoriteList);

    useEffect(() => {
        dispatch({
            type: 'FETCH_FAVORITES'
        });
    }, []);

    console.log('favoriteList', favoriteList);


    return (
        <section className='favoriteList'>
            {favoriteList.map((element) => {
                return (
                    <FavoriteItem key={element.id} element={element} />
                );
            })}
        </section>
    );
}

export default FavoriteList